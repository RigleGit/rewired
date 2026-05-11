(() => {
  const root = document.querySelector("[data-blog-page]");
  const cards = Array.from(document.querySelectorAll("[data-blog-card]"));
  const pagination = document.querySelector("[data-blog-pagination]");

  if (!root) {
    console.warn("rewired: missing [data-blog-page]");
    return;
  }

  if (!cards.length) {
    console.warn("rewired: no [data-blog-card] found");
    return;
  }

  if (!pagination) {
    console.warn("rewired: missing [data-blog-pagination]");
  }

  const categoryButtons = Array.from(document.querySelectorAll("[data-blog-category-filter]"));
  const yearButtons = Array.from(document.querySelectorAll("[data-blog-year-filter]"));
  const searchInput = document.querySelector("[data-blog-search]");
  const emptyState = document.querySelector("[data-blog-empty]");

  const pageSize = Number.parseInt(root.dataset.blogPageSize, 10) || 5;

  let currentCategory = "all";
  let currentYear = "all";
  let currentSearch = "";
  let currentPage = 1;

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function syncButtons() {
    categoryButtons.forEach((button) => {
      const isActive = button.dataset.blogCategoryFilter === currentCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    yearButtons.forEach((button) => {
      const isActive = button.dataset.blogYearFilter === currentYear;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function getMatches() {
    return cards.filter((card) => {
      const categories = normalize(card.dataset.categories).split(/\s+/).filter(Boolean);
      const year = normalize(card.dataset.year);
      const searchable = normalize(card.dataset.search);

      const matchesCategory =
        currentCategory === "all" || categories.includes(currentCategory);

      const matchesYear =
        currentYear === "all" || year === currentYear;

      const matchesSearch =
        currentSearch === "" || searchable.includes(currentSearch);

      return matchesCategory && matchesYear && matchesSearch;
    });
  }

  function createButton(label, page, options = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "blog-pagination__button";
    button.textContent = label;

    if (options.active) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "page");
    }

    if (options.disabled) {
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      if (options.disabled) return;
      currentPage = page;
      render();
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return button;
  }

  function getPageItems(totalPages) {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = new Set([1, totalPages, currentPage]);

    if (currentPage > 1) pages.add(currentPage - 1);
    if (currentPage < totalPages) pages.add(currentPage + 1);

    const sorted = Array.from(pages).sort((a, b) => a - b);
    const result = [];

    sorted.forEach((page, index) => {
      const previous = sorted[index - 1];
      if (previous && page - previous > 1) result.push("…");
      result.push(page);
    });

    return result;
  }

  function renderPagination(totalPages) {
    if (!pagination) return;

    pagination.innerHTML = "";

    if (totalPages <= 1) {
      pagination.hidden = true;
      return;
    }

    pagination.hidden = false;

    pagination.appendChild(
      createButton("←", Math.max(1, currentPage - 1), {
        disabled: currentPage === 1,
      })
    );

    getPageItems(totalPages).forEach((item) => {
      if (item === "…") {
        const span = document.createElement("span");
        span.className = "blog-pagination__ellipsis";
        span.textContent = "…";
        pagination.appendChild(span);
        return;
      }

      pagination.appendChild(
        createButton(String(item), item, {
          active: item === currentPage,
        })
      );
    });

    pagination.appendChild(
      createButton("→", Math.min(totalPages, currentPage + 1), {
        disabled: currentPage === totalPages,
      })
    );
  }

  function render() {
    syncButtons();

    const matches = getMatches();
    const totalPages = Math.ceil(matches.length / pageSize);

    if (currentPage > totalPages) {
      currentPage = Math.max(1, totalPages);
    }

    const start = (currentPage - 1) * pageSize;
    const visibleCards = new Set(matches.slice(start, start + pageSize));

    cards.forEach((card) => {
      card.hidden = !visibleCards.has(card);
    });

    if (emptyState) {
      emptyState.hidden = matches.length !== 0;
    }

    renderPagination(totalPages);
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.blogCategoryFilter || "all";
      currentPage = 1;
      render();
    });
  });

  yearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentYear = button.dataset.blogYearFilter || "all";
      currentPage = 1;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = normalize(searchInput.value);
      currentPage = 1;
      render();
    });
  }

  render();
})();