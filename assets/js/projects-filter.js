(() => {
  const root = document.querySelector("[data-projects-page]");
  if (!root) return;

  const buttons = Array.from(document.querySelectorAll("[data-project-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-project-card]"));

  if (!buttons.length || !cards.length) return;

  function applyFilter(filter) {
    buttons.forEach((button) => {
      const isActive = button.dataset.projectFilter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    cards.forEach((card) => {
      const status = card.dataset.status || "active";
      const visible = filter === "all" || status === filter;
      card.hidden = !visible;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.projectFilter || "all");
    });
  });

  applyFilter("all");
})();