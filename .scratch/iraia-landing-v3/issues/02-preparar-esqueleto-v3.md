# Preparar el esqueleto de la v3 en v3/

Type: task
Status: resolved

## Question

Duplicar la v2 actual en `v3/` (HTML, CSS y JS) y verificar que la página funciona igual antes de rediseñar: navegación sticky, FAQ, CTA móvil, fallback de imágenes y reduced motion. Mantener los textos, la paleta y las fotos intactos.

Entregable: `v3/la-isla.html` + `v3/css/styles.css` + `v3/js/...` funcionando con el mismo contenido que la v2.

## Answer

Creado `v3/` como copia exacta de la v2:

- `v3/la-isla.html`
- `v3/css/styles.css`
- `v3/js/main.js`
- `v3/js/image-fallback.js`

Verificación realizada:

- Hashes idénticos entre la v2 y la copia de la v3.
- 14 secciones detectadas, igual que en la v2.
- Las tres referencias locales (`css/styles.css`, `js/main.js`, `js/image-fallback.js`) resuelven correctamente.
- Carga en Chrome con CSS y JS servidos con 200 y sin errores locales.
- La página se ve igual que la v2 y conserva los mismos archivos JS.

La base queda lista para empezar los prototipos.
