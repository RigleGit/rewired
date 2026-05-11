---
title: "Full Markdown stress test"
date: 2026-05-10
description: "A test post for lists, tables, quotes, code blocks, links, and base typography."
tags: ["markdown", "design", "demo"]
categories: ["testing"]
draft: false
---

This post exists to test how the theme behaves with typical technical blog content.

## Basic text

A regular paragraph with **bold**, *italic*, ***both***, `inline code`, ~~strikethrough~~, and a link to [Hugo](https://gohugo.io/).

It is also useful to test long technical terms such as `std::vector<BookPage>`, `ReaderController::OnAppletSuspended()`, and paths like `sdmc:/3ds/3dslibris/cache/covers/`.

## Lists

Unordered list:

- First item.
- Second item with a bit more text to check wrapping.
- Third item:
  - Nested item A.
  - Nested item B.
    - Deeply nested item.

Ordered list:

1. Prepare the content.
2. Build the demo.
3. Check the page on mobile.
4. Fix odd spacing.

Task list:

- [x] Create the theme.
- [x] Add a demo.
- [ ] Review accessibility.
- [ ] Publish a release.

## Quote

> Design does not break when everything is perfect.
> Design is tested when content is irregular, long, and slightly uncomfortable.

## Table

| Element | Status | Comment |
| --- | --- | --- |
| Blog | OK | Should show listings, tags, and pagination. |
| Projects | OK | Should show icon, status, and external link. |
| Tables | Testing | Check overflow on mobile. |
| Code | Testing | Review contrast and padding. |

## Code

Short code block:

```bash
hugo server --source exampleSite
```

Longer code block:

```cpp
struct ViewportState {
    int zoom_index = 0;
    int max_zoom_index = 0;
    int center_x = 0;
    int center_y = 0;
    bool interaction_active = false;
};

void ClampViewport(ViewportState& viewport, int width, int height) {
    if (viewport.center_x < 0) {
        viewport.center_x = 0;
    }

    if (viewport.center_y < 0) {
        viewport.center_y = 0;
    }
}
```

## Separators

Text before the separator.

---

Text after the separator.

## Footnote

This sentence has a footnote.[^1]

[^1]: This is a test footnote to check size, spacing, and backlink behavior.

## Basic HTML

<details>
<summary>Expandable block</summary>

This content is inside a `details` block. It helps check whether the theme styles it nicely or at least does not break.

</details>
