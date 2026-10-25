# La Isla v3 · Bitácora editorial

## Destination

Una v3 implementable en `v3/`: misma paleta exacta, mismos textos, mismas tipografías y fotos, con composiciones nuevas para los 14 bloques de contenido y el chrome global (nav, marquesina, footer y CTA fijo). Fase 1: fijar el sistema de composición y prototipar hero, mapa y oferta. Fase 2: implementar y validar la página completa.

## Notes

- **Ejecución incluida**: a diferencia del modo planning por defecto, este esfuerzo incluye la implementación de la v3. Los tickets de ejecución son `task`; las decisiones siguen siendo tickets `grilling`/`prototype`.
- **Dirección**: Bitácora editorial. Cada sección se lee como una página de cuaderno de campo: asimetría, márgenes anotados, fotos como láminas y el mapa como desplegable central. Nada de tarjetas repetidas como esqueleto.
- **Invariantes**: textos exactos; paleta exacta de `css/styles.css`; Cormorant Garamond, Lora y Nunito Sans; las cuatro fotos actuales y sus URLs; sin fotos nuevas.
- **Tarjetas**: fuera de las secciones narrativas y de prueba; se conserva una única tarjeta fuerte para la oferta.
- **Mapa**: ilustrativo, con hover sutil; sin navegación interactiva por hotspots en esta v3.
- **Decoración**: conservar mapa, costas y textura de papel; simplificar los topográficos repetidos; redibujar iconos solo cuando aporten; una pieza gráfica protagonista por bloque.
- **Fotos**: el arco se reserva al hero; retrato, producto y testimonios usan placas rectangulares con marco de papel y pie de foto.
- **Construcción**: duplicar la v2 actual en `v3/`, reescribir marcado y CSS, conservar el comportamiento JS (FAQ, sticky nav, CTA móvil, reduced motion).
- **Fase 2**: ejecución dividida en [tokens/chrome](issues/07-tokens-grid-chrome.md), [hero/marquesina](issues/08-hero-marquesina.md), [narrativa](issues/09-bloques-narrativos.md), [método](issues/10-metodo.md), [prueba/conversión](issues/11-prueba-conversion.md) y [QA](issues/12-qa-final.md).
- **Skills**: `frontend-design` para dirección de arte; `prototype` para variantes de UI; `domain-modeling` para precisión de términos; `web-design-guidelines` para la auditoría final si se instala.
- **Referencias**: v2 actual = `la-isla.html`, `css/styles.css`, `js/main.js`, `js/image-fallback.js`; referencia histórica = `v1/`.
- **Nomenclatura**: la v3 se llama **La Isla v3 · Bitácora editorial**.

## Decisions so far

<!-- Una línea por ticket cerrado. -->

- [Definir el sistema de composición de la v3](issues/01-definir-sistema-composicion.md): grid de 12 columnas, seis arquetipos, notas de margen, tarjetas solo en la oferta y arco solo en el hero. Sistema completo en [design-system.md](design-system.md).
- [Preparar el esqueleto de la v3 en v3/](issues/02-preparar-esqueleto-v3.md): `v3/la-isla.html` + CSS/JS copiados de la v2 y verificados; base lista para prototipos.
- [Prototipar el hero en tres variantes](issues/03-prototipar-hero.md): elegida A con el eyebrow encima del titular; 8 columnas de texto + 4 de foto, con la imagen y el arco intactos.
- [Prototipar el mapa en tres variantes](issues/04-prototipar-mapa.md): elegida la composición de la v2 afinada; mapa centrado de máximo 1000 px y cuatro bloques 2×2 sin fondo de color, a 1280 px.
- [Prototipar la oferta en tres variantes](issues/05-prototipar-oferta.md): elegida A · Mesa de expedición; paisaje a sangre, encabezado centrado y tarjeta vertical centrada.
- [Elegir la dirección final y congelar el sistema](issues/06-elegir-direccion-final.md): dirección consolidada en [design-system.md](design-system.md); hero A, mapa v2 afinado y oferta A. Fase 2 dividida en seis tickets de implementación.
- [Aplicar tokens, grid y chrome global](issues/07-tokens-grid-chrome.md): tokens, wrap de 1280 px, grid de 12 columnas, nav sticky, footer colofón y CTA móvil aplicados en `v3/`; los bloques siguen siendo los de la v2.
- [Implementar hero y marquesina](issues/08-hero-marquesina.md): hero A implementado con eyebrow arriba, 8/4, foto con sangrado derecho, arco y franja de prueba; marquesina más lenta y con olas pequeñas.
- [Implementar bloques narrativos](issues/09-bloques-narrativos.md): story, portrait, statement, mirror y beyond recompuestos según los arquetipos de ensayo, lámina, manifiesto e índice. La nota de voces conserva el fondo lino de la v2.
- [Implementar método](issues/10-metodo.md): product con lámina y ruta vertical; mapa v2 afinado con bloques sin fondo; included como índice oscuro de cuatro filas.
- [Implementar prueba y conversión](issues/11-prueba-conversion.md): reassure, testimonials, oferta A, FAQ a dos columnas y closing; sin tarjetas salvo la oferta.
- [QA final de la v3](issues/12-qa-final.md): copy y paleta intactos, 4 fotos cargadas, sin overflow, sin IDs duplicados ni referencias rotas; revisión visual completa.

## Not yet specified

Sin niebla pendiente. El mapa pasa a fase de ejecución con los tickets 07–12.

## Out of scope

- Cambiar textos, paleta, tipografías o fotos.
- Checkout y pago real, precios/condiciones, páginas legales, analítica y SEO.
- Nueva identidad de marca o rediseño del logo.
- Backend o plataforma de membresía.
- Deploy.
