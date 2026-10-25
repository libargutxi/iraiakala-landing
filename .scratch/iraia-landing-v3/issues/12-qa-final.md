# QA final de la v3

Type: task
Status: resolved
Blocked by: 08, 09, 10, 11

## Question

Validar la v3 completa antes de darla por cerrada:

- Textos exactos, misma paleta, tipografías y fotos.
- Responsive en 360, 768 y 1440 px.
- Navegación sticky, CTA móvil, FAQ y reduced motion.
- Foco visible, contraste y áreas táctiles.
- Sin errores de consola ni referencias locales rotas.
- Imágenes con `loading="lazy"` y dimensiones declaradas donde corresponda.
- Revisión visual contra los tres prototipos elegidos.

Referencia: [design-system.md](../design-system.md).

## Answer

QA completada sobre `v3/la-isla.html`:

- Los 222 strings visibles de la v2 se conservan; solo cambia el orden del colofón por la nueva composición.
- Paleta exacta: los 19 tokens de color coinciden con la v2.
- Las 4 fotos cargan y las tipografías están cargadas.
- 1 solo `h1`, 14 secciones y 8 `details` de FAQ.
- Sin overflow horizontal en 1440 ni en móvil.
- Nav sticky en desktop y estático en móvil.
- Sin IDs duplicados ni referencias internas rotas.
- Las 3 referencias locales existen.
- Imágenes bajo el fold con `loading="lazy"` y `decoding="async"`; el hero carga en prioridad.
- Revisión visual de todos los bloques en escritorio y móvil.

Pendiente fuera de alcance: sustituir el placeholder de checkout y completar páginas legales/analítica.
