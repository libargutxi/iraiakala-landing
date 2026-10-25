# La Isla v4 · Mezcla editorial v2 + v3

La v4 parte de la base de la v3 (ancho, tokens, navegación sticky y rendimiento) y recupera el diseño de la v2 en los bloques indicados.

## Base

- Ancho de página de la v3: `1280px`.
- Tokens, grid, nav sticky, CTA móvil y footer responsive.
- Imágenes con `loading="lazy"` bajo el fold y `decoding="async"`.
- Fallback base64 de la v3, ajustado para no forzar la carga de imágenes lazy.
- Mismos textos, paleta, tipografías y fotos.

## Bloques

### Diseño v3

- Hero.
- Marquesina.
- Portrait de Iraia.
- Para quién es La Isla.
- Mapa de La Isla.
- Oferta.
- Cierre “Tu Isla ya existe”.

### Diseño v2

- Story “¿Te suena?”.
- Statement / filosofía de La Isla.
- Product / qué es La Isla.
- Beyond / más allá del movimiento.
- Included / qué encuentras cada mes.
- Reassure / empiezas desde donde estés.
- Testimonials / lo que cuentan ellas.
- FAQ / acordeones.
- Footer.

## Ver en local

```bash
cd /home/lur/iraiakala_landing
python3 -m http.server 8000
```

Abrir `http://localhost:8000/v4/la-isla.html`.

## Fuera de alcance

- Checkout real y condiciones de compra.
- Páginas legales, cookies y analítica.
- Deploy.
