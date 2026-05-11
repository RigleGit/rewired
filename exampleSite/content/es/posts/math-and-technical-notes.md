---
title: "Prueba de matemáticas y notas técnicas"
date: 2026-05-10
description: "Entrada de prueba para validar fórmulas, tablas técnicas, bloques de código y contenido mixto."
tags: ["matemáticas", "katex", "técnico", "demo"]
categories: ["pruebas"]
math: true
draft: false
---

Este post sirve para comprobar fórmulas matemáticas, tablas técnicas y contenido de documentación.

## Matemáticas inline

Una fórmula inline sencilla: \(a^2 + b^2 = c^2\).

Otra expresión inline con subíndices y superíndices: \(x_i = y_i^2 + \alpha\).

## Matemáticas en bloque

\[
E = mc^2
\]

Una expresión algo más larga:

\[
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]

Y una matriz:

\[
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
\]

También probamos delimitadores con doble dólar:

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

## Tabla técnica

| Métrica | Valor | Observación |
| --- | ---: | --- |
| Tiempo de apertura | 420 ms | Correcto para libros pequeños. |
| Memoria libre | 48 MB | Depende del modelo de consola. |
| Páginas generadas | 128 | Tras parseo inicial. |
| Caché de portadas | Sí | Reduce trabajo en el navegador. |

## Bloque de configuración

```toml
[params]
  blogPageSize = 5

[params.toc]
  enabled = true
  ordered = false
  startLevel = 2
  endLevel = 3
```

## Bloque de log

```txt
[EPUB] open: started
[EPUB] css-scan: 12 stylesheets
[LAYOUT] pages generated: 128
[CACHE] cover hit: true
[APP] ready
```

## Caso de texto denso

Este párrafo es deliberadamente más largo que los anteriores. Sirve para comprobar ritmo vertical, ancho de línea, contraste, legibilidad y comportamiento en pantallas estrechas. Un tema puede parecer correcto con frases cortas, pero romper su comodidad cuando aparecen fragmentos técnicos, nombres largos, rutas de archivo, identificadores de código y expresiones mezcladas en la misma línea.

## Lista técnica

1. Parsear metadatos.
2. Resolver recursos internos.
3. Aplicar estilos.
4. Generar páginas.
5. Cachear resultados.
6. Renderizar la vista actual.

## Cierre

Si esta entrada se lee bien, el tema ya cubre bastante contenido realista de blog técnico.
