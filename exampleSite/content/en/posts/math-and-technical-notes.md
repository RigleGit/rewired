---
title: "Math and technical notes test"
date: 2026-05-10
description: "A test post for formulas, technical tables, code blocks, and mixed content."
tags: ["math", "katex", "technical", "demo"]
categories: ["testing"]
math: true
draft: false
---

This post tests mathematical expressions, technical tables, and documentation-like content.

## Inline math

A simple inline formula: \(a^2 + b^2 = c^2\).

Another inline expression with subscripts and superscripts: \(x_i = y_i^2 + \alpha\).

## Block math

\[
E = mc^2
\]

A slightly longer expression:

\[
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]

And a matrix:

\[
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
\]

Double-dollar delimiters too:

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

## Technical table

| Metric | Value | Note |
| --- | ---: | --- |
| Opening time | 420 ms | Fine for small books. |
| Free memory | 48 MB | Depends on console model. |
| Generated pages | 128 | After initial parsing. |
| Cover cache | Yes | Reduces browser work. |

## Configuration block

```toml
[params]
  blogPageSize = 5

[params.toc]
  enabled = true
  ordered = false
  startLevel = 2
  endLevel = 3
```

## Log block

```txt
[EPUB] open: started
[EPUB] css-scan: 12 stylesheets
[LAYOUT] pages generated: 128
[CACHE] cover hit: true
[APP] ready
```

## Dense text case

This paragraph is deliberately longer than the previous ones. It tests vertical rhythm, line width, contrast, readability, and behavior on narrow screens. A theme can look fine with short sentences, but become uncomfortable when technical fragments, long names, file paths, code identifiers, and expressions appear in the same line.

## Technical list

1. Parse metadata.
2. Resolve internal resources.
3. Apply styles.
4. Generate pages.
5. Cache results.
6. Render the current view.

## Closing

If this entry reads well, the theme already covers a realistic chunk of technical blog content.
