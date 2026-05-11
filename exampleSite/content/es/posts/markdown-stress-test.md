---
title: "Prueba completa de Markdown"
date: 2026-05-10
description: "Entrada de prueba para validar listas, tablas, citas, código, enlaces y estilos básicos."
tags: ["markdown", "diseño", "demo"]
categories: ["pruebas"]
draft: false
---

Este post existe para comprobar cómo se comporta el tema con contenido típico de un blog técnico.

## Texto básico

Un párrafo normal con **negrita**, *cursiva*, ***ambas***, `código inline`, ~~texto tachado~~ y un enlace a [Hugo](https://gohugo.io/).

También conviene probar una línea larga con términos técnicos como `std::vector<BookPage>`, `ReaderController::OnAppletSuspended()` y rutas como `sdmc:/3ds/3dslibris/cache/covers/`.

## Listas

Lista sin ordenar:

- Primer elemento.
- Segundo elemento con algo más de texto para comprobar el salto de línea cuando se alarga.
- Tercer elemento:
  - Subnivel A.
  - Subnivel B.
    - Subnivel profundo.

Lista ordenada:

1. Preparar el contenido.
2. Compilar la demo.
3. Revisar la página en móvil.
4. Corregir espaciados raros.

Lista de tareas:

- [x] Crear el tema.
- [x] Añadir una demo.
- [ ] Revisar accesibilidad.
- [ ] Publicar una release.

## Cita

> El diseño no se rompe cuando todo es perfecto.
> El diseño se prueba cuando el contenido es irregular, largo y un poco incómodo.

## Tabla

| Elemento | Estado | Comentario |
| --- | --- | --- |
| Blog | OK | Debe mostrar listados, tags y paginación. |
| Proyectos | OK | Debe enseñar icono, estado y enlace externo. |
| Tablas | En prueba | Comprobar overflow en móvil. |
| Código | En prueba | Revisar contraste y padding. |

## Código

Código corto:

```bash
hugo server --source exampleSite
```

Código más largo:

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

## Separadores

Texto antes del separador.

---

Texto después del separador.

## Footnote

Este texto tiene una nota al pie.[^1]

[^1]: Esta es una nota al pie de prueba para comprobar tamaño, separación y enlaces de retorno.

## HTML básico

<details>
<summary>Bloque desplegable</summary>

Este contenido está dentro de un `details`. Sirve para ver si el tema lo estiliza decentemente o si al menos no se rompe.

</details>
