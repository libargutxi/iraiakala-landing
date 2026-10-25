# Aplicar tokens, grid y chrome global

Type: task
Status: resolved

## Question

Implementar en `v3/` la base del sistema: tokens exactos de color y tipografía, grid de 12 columnas, anchos y espaciados, navegación sticky en desktop, CTA inferior solo en móvil y footer de colofón.

Mantener intactos textos, paleta, tipografías y fotos. La página debe quedar navegable y con el contenido actual, preparada para sustituir los bloques uno a uno.

Referencia: [design-system.md](../design-system.md).

## Answer

Aplicada la base de la v3 en `v3/`:

- Tokens nuevos de página, grid, tipografía, medidas, radios y reglas.
- `.wrap` a 1280 px con gutter fluido.
- Utilidad `.grid-12` (12 columnas en desktop, 4 en móvil).
- Nav sticky en desktop, altura de ~70 px; sin cambios en móvil.
- Footer convertido en colofón de tres columnas, con los textos existentes.
- CTA inferior solo en móvil.
- Los bloques de contenido siguen siendo los de la v2; se sustituirán en los tickets 08–11.

Verificado en Chrome: nav sticky a 71 px, wrap de 1280 px, footer de tres columnas en desktop y una en móvil, CTA inferior oculto en desktop y visible en móvil.
