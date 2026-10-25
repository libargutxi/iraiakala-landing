# La Isla v3 · Sistema de composición

> Documento de trabajo del ticket **Definir el sistema de composición de la v3**.
> No es código de producción. Es la decisión que guiará los prototipos y la implementación.

## 1. Brief

**Sujeto:** membresía online de Barre para mujeres, creada por Iraia Ibañez.  
**Promesa:** una forma de entrenar a la que quieras volver, con técnica, dirección y espacio para la vida real.  
**Audiencia:** mujeres que ya han probado rutinas, apps y clases sueltas y no han encontrado una práctica sostenible.  
**Trabajo de la página:** que entiendan el método, confíen en Iraia y lleguen a la oferta.

**Dirección:** Bitácora editorial. La página se lee como un cuaderno de campo mediterráneo: observación, mapas, láminas, márgenes anotados y una voz serena. No es un catálogo de tarjetas ni una landing de gimnasio.

## 2. Invariantes

- Los textos se mantienen exactos. No se reescribe copy para que encaje en el diseño.
- La paleta es la actual, con los mismos hex.
- Las tipografías son Cormorant Garamond, Lora y Nunito Sans.
- Las cuatro fotos actuales y sus URLs se mantienen. No hay fotos nuevas.
- Se conservan las interacciones: FAQ, sticky nav, CTA móvil, reduced motion y fallback de imágenes.
- El checkout sigue siendo un placeholder; no es parte de esta v3.

## 3. Tokens

### Color

No se añaden colores nuevos. Solo se usan los existentes, con transparencias cuando hace falta.

| Token | Hex | Uso |
|---|---|---|
| `--crema` | `#F7F0E6` | Papel base |
| `--beige` | `#F1E7DB` | Sección alterna cálida |
| `--arena` | `#E8D9BE` | Bloque de tierra / contraste suave |
| `--lino` | `#FAF5ED` | Marco de fotos, papel claro |
| `--salvia` | `#8FC6B7` | Acento vegetal, detalles sobre oscuro |
| `--verde` | `#356B5F` | Marca, líneas, enlaces |
| `--verde-2` | `#24493F` | Titulares |
| `--tierra` | `#1D3933` | Secciones oscuras |
| `--tierra-2` | `#132C27` | Fondo profundo / footer |
| `--coral` | `#FF8F80` | CTA y acción |
| `--coral-2` | `#E8705F` | Marcas, hover, acentos |
| `--terracota` | `#A65A44` | Acento secundario, texto pequeño sobre claro |
| `--tinta` | `#2A2320` | Texto principal |
| `--tinta-2` | `#5E564E` | Texto secundario |
| `--claro` | `#F7EFE4` | Texto sobre oscuro |
| `--btn-text` | `#2E1710` | Texto del CTA coral |

**Regla:** el coral es acción, no decoración. No se usa coral como color de texto pequeño sobre crema; para eso está `--terracota`.

### Tipografía

Se mantienen las tres familias, con roles más estrictos:

- **Cormorant Garamond:** titulares, cifras grandes, pull quotes y firma editorial.
- **Lora:** cuerpo de texto, entradillas, citas y notas de margen.
- **Nunito Sans:** navegación, botones, etiquetas funcionales y datos pequeños.

Escala propuesta:

```css
--display-xl: clamp(3.4rem, 2.1rem + 5.2vw, 6.2rem);
--display-l:  clamp(2.8rem, 1.8rem + 4vw, 5rem);
--display-m:  clamp(2rem, 1.5rem + 2.2vw, 3.2rem);
--display-s:  clamp(1.6rem, 1.35rem + .8vw, 2.1rem);
--body-l:     clamp(1.1rem, 1.02rem + .35vw, 1.28rem);
--body:       clamp(1.02rem, .98rem + .18vw, 1.1rem);
--body-s:     .9rem;
--label:      .72rem;
--micro:      .68rem;
```

- Interlineado de titulares: `1.02–1.08`.
- Interlineado de cuerpo: `1.68–1.72`.
- Interlineado de entradilla: `1.42`.
- Longitud de línea: 58–68 caracteres en cuerpo; 45–55 en notas.
- Los eyebrows dejan de ser etiquetas pequeñas repetidas: pasan a ser **notas de margen** en desktop y una línea sobre el titular en móvil.

### Grid y espacio

```css
--page-max: 1280px;
--gutter: clamp(22px, 5vw, 80px);
--grid-gap: clamp(20px, 2.4vw, 36px);
--measure: 64ch;
--measure-narrow: 52ch;
--section-y: clamp(5.5rem, 10vw, 10rem);
--section-y-sm: clamp(3.5rem, 7vw, 6rem);
```

- Grid de 12 columnas en desktop; 4 columnas en móvil.
- Márgenes generosos: la página respira más que la v2.
- El texto nunca ocupa las 12 columnas; las imágenes sí pueden sangrar.
- Se alternan bloques centrados y bloques asimétricos. El centro se reserva para manifiesto y cierre.

### Superficies, radios y sombras

- Fondo base: papel (`--crema`) con la textura actual.
- Alternancia: `--beige` y `--arena` para cambiar de página sin añadir adornos.
- Oscuro: `--tierra` y `--tierra-2` solo en manifiesto, incluido y cierre.
- Fotos: marco de 6 px en `--lino`. El arco `999px 999px 16px 16px` se reserva al hero como firma única; retrato, producto y testimonios usan placas rectangulares de 10 px.
- Tarjetas: **solo la oferta**. Una única tarjeta, radio 18 px, borde fino y sombra contenida.
- Reglas: sólidas al 22 % de verde; discontinuas al 35 % para separar listas y notas.
- Sombras: solo en fotos y oferta. Nada de sombra suave en cada bloque.

### Movimiento

- Una entrada orquestada en el hero: titular, foto y datos aparecen en secuencia.
- El mapa conserva su animación ambiental, pero más lenta y con menos elementos en movimiento.
- Hover solo en elementos interactivos: enlaces, botones, labels del mapa.
- Nada de fade-up en cada sección.
- `prefers-reduced-motion` sigue desactivando todo.

## 4. Principios de composición

1. **El margen es parte del diseño.** Los eyebrows, las notas y las cifras pequeñas viven en el margen izquierdo; no son adornos centrados sobre cada titular. **Excepción:** en el hero, el eyebrow sube encima del titular para ganar ancho de lectura y dejar que el titular ocupe más columnas.
2. **Una pieza protagonista por bloque.** Una foto, un mapa, una cita o un titular. Lo demás se calla.
3. **Reglas antes que tarjetas.** Listas, índices y columnas separadas por líneas finas en lugar de contenedores redondeados.
4. **Asimetría con propósito.** El texto se desplaza a izquierda o derecha; las imágenes sangran; el centro se usa solo para los momentos manifiesto.
5. **Números solo cuando hay secuencia.** Los cuatro lugares del mapa, los cuatro incluidos y los tres pasos del producto. Fuera de ahí, no.
6. **Coral = acción.** Un solo acento coral por bloque como máximo, además del CTA.
7. **La imagen es material, no decoración.** Marco de papel, pie de foto en Lora italic y recorte intencionado.
8. **Menos costa, más silencio.** Las costas y los topográficos aparecen en dos o tres transiciones, no en todas las secciones.
9. **El texto manda.** El diseño se adapta al copy existente; no se inventan etiquetas para justificar una composición.
10. **Una sola idea visual por pantalla.** Si una sección necesita dos protagonistas, se divide en dos secciones o se elimina un adorno.

## 5. Arquetipos de sección

### A. Portada

Para hero. Titular a la izquierda, foto a la derecha, datos de precio y prueba en una franja inferior.

```text
┌────────────────────────────────────────────────────┐
│ eyebrow sobre el titular                           │
│ H1 ocupa 8 columnas                 ┌───────────┐  │
│                                     │           │  │
│ entradilla 6 columnas               │   foto    │  │
│ cuerpo 6 columnas                   │   arco    │  │
│                                     │           │  │
│ CTA + precio                        └───────────┘  │
│ ─────────────────────────────────────────────────  │
│ Barre real · Desde casa · A tu ritmo                │
└────────────────────────────────────────────────────┘
```

### B. Ensayo

Para story, beyond y FAQ. Texto en una columna desplazada, con margen para notas y una cita que rompe la medida.

```text
┌────────────────────────────────────────────────────┐
│ nota        titular 7 columnas                     │
│ de margen                                          │
│             cuerpo 6 columnas                      │
│             cuerpo                                 │
│                                                    │
│             cita / remate 8 columnas               │
└────────────────────────────────────────────────────┘
```

### C. Lámina

Para portrait, product y testimonios. Foto como placa, texto al lado, pie de foto.

```text
┌────────────────────────────────────────────────────┐
│ ┌─────────────┐   titular 5 columnas               │
│ │             │   cuerpo 5 columnas                │
│ │    foto     │                                    │
│ │   / lámina  │   cita / detalle                   │
│ └─────────────┘                                    │
│ pie de foto                                        │
└────────────────────────────────────────────────────┘
```

### D. Índice

Para included, reassure, mirror y la leyenda del mapa. Filas abiertas con reglas; no tarjetas.

```text
┌────────────────────────────────────────────────────┐
│ titular 5 columnas        intro 5 columnas         │
│ ─────────────────────────────────────────────────  │
│ 01   título          descripción                   │
│ ─────────────────────────────────────────────────  │
│ 02   título          descripción                   │
│ ─────────────────────────────────────────────────  │
│ 03   título          descripción                   │
└────────────────────────────────────────────────────┘
```

### E. Manifiesto

Para statement y closing. Fondo oscuro, titular grande, una pieza gráfica y cuerpo corto.

```text
┌────────────────────────────────────────────────────┐
│ fondo oscuro                                       │
│                                                    │
│        titular 9 columnas                          │
│                                                    │
│        cuerpo 5 columnas      gráfico / isla       │
│                                                    │
│        línea de cierre 8 columnas                  │
└────────────────────────────────────────────────────┘
```

### F. Oferta

Para offer. Paisaje a sangre y una única tarjeta desplazada.

```text
┌────────────────────────────────────────────────────┐
│ paisaje a sangre                                   │
│                                                    │
│ titular + intro                                    │
│                         ┌───────────────────────┐  │
│                         │ tarjeta de oferta     │  │
│                         │ precio / CTA / fine   │  │
│                         └───────────────────────┘  │
└────────────────────────────────────────────────────┘
```

## 6. Plan bloque a bloque

| Bloque | Arquetipo | Movimiento principal | Pieza protagonista |
|---|---|---|---|
| Nav | Chrome | Sticky en desktop; 64–72 px; crema; regla fina | CTA coral |
| Hero | Portada | Eyebrow sobre el titular; titular 8 col + foto 4 col que sangra a la derecha; franja de prueba abajo | Titular y foto |
| Marquee | Cinta | Una sola línea, más lenta, con olas pequeñas | Movimiento continuo |
| Story | Ensayo | Texto desplazado a la derecha; las voces interiores en el margen | Cita de cierre |
| Portrait | Lámina | Foto rectangular a la izquierda, texto a la derecha; pie de foto | Retrato + ficha |
| Statement | Manifiesto | Titular a la izquierda; bucle de “volver”; cuerpo corto | Bucle / topo |
| Mirror | Índice | Seis frases en dos columnas con puntos coral; remate a ancho completo | Remate |
| Product | Lámina + ruta | Foto a la derecha; tres pasos en vertical | Ruta de tres pasos |
| Map | Desplegable | Mapa centrado con ancho máximo de 1000 px; cuatro bloques 2×2 sin fondo a 1280 px; ciclo centrado | Mapa |
| Beyond | Ensayo | Fondo beige; un solo topo; cierre grande | Línea de cierre |
| Included | Índice | Cuatro filas en oscuro; icono, título y texto | Lista mensual |
| Reassure | Lista | Seis “no hace falta” en dos columnas; cierre a ancho completo | Cierre |
| Testimonials | Voces | Tres citas separadas por reglas; foto ancha debajo | Foto + citas |
| Offer | Oferta | Paisaje a sangre; tarjeta única | Precio / CTA |
| FAQ | Ensayo | Titular a la izquierda; preguntas a la derecha | Acordeón |
| Closing | Manifiesto | Isla de fondo; titular grande; CTA | Isla / CTA |
| Footer | Colofón | Tres columnas: marca, créditos, legal | Lema |
| Sticky CTA | Chrome móvil | Solo móvil; coral; safe area | CTA |

## 7. Sistema decorativo

- **Se conserva:** textura de papel, mapa ilustrado, costas en los cambios de sección, arco del hero y marco de papel de las fotos.
- **Se simplifica:** los topográficos repetidos. Solo aparecen en Statement y Beyond.
- **Se redibuja:** iconos de los cuatro espacios con un único grosor de línea y menos detalle; la ola se mantiene como marca pequeña.
- **Se elimina:** sellos circulares, marcos dobles, adornos que no aportan información y cualquier tarjeta que no sea la oferta.
- **Una pieza gráfica por bloque.** Si una sección ya tiene foto o mapa, no necesita además topo, costa y sello.

## 8. Imágenes

- Hero: arco + marco de 6 px en `--lino`. Es la única aparición del arco; funciona como la puerta de entrada a La Isla.
- Retrato, producto y testimonios: placas rectangulares de 10 px, con pie de foto en Lora italic.
- El arco no se repite fuera del hero. Así conserva su valor de firma y el resto de imágenes se lee como material documental.
- Sin filtros nuevos ni overlays de color. La foto se trata como material editorial.
- En móvil, las fotos ocupan el ancho disponible y mantienen el marco; no se recortan de forma agresiva.
- `loading="lazy"` y dimensiones declaradas en la implementación.

## 9. Responsive

- Desktop: 12 columnas, márgenes amplios, notas en el margen.
- Tablet: 8 columnas; las notas pasan encima del titular; las fotos dejan de sangrar.
- Móvil: 4 columnas; una sola columna de lectura; eyebrows sobre el titular; mapa con leyenda en lista; oferta a ancho completo.
- Nada depende del hover. Los labels del mapa tienen equivalente táctil o texto visible.
- Áreas táctiles de 44 px mínimo.
- El CTA fijo inferior se mantiene solo en móvil.

## 10. Accesibilidad

- Contraste: `--claro` sobre `--tierra` y `--btn-text` sobre `--coral` son las combinaciones seguras. El coral no se usa para texto pequeño sobre crema.
- Foco visible en todos los enlaces, botones, `summary` y controles.
- Jerarquía de encabezados intacta: un `h1` y un `h2` por sección.
- `details/summary` para FAQ, con teclado.
- `prefers-reduced-motion` desactiva marquesina, mapa y entrada del hero.
- Textos alternativos existentes; no se duplica información decorativa en lectores de pantalla.

## 11. Autocrítica

**Riesgo 1: que “editorial” se convierta en el enésimo broadsheet de fondo crema, serif y líneas finas.**  
Se evita con asimetría real, imágenes que sangran, notas de margen y una ausencia deliberada de tarjetas. No con más adornos.

**Riesgo 2: que la paleta cálida y el serif se lean como el default de moda.**  
La paleta y las fuentes están fijadas por el brief. La diferencia tiene que venir de la composición, no de cambiar los colores.

**Riesgo 3: que el “cuaderno” se llene de etiquetas y números decorativos.**  
Los números solo se usan en secuencias reales. No se añaden labels nuevos.

**Riesgo 4: que el movimiento vuelva a ser un fade-up en cada sección.**  
Solo hay una entrada en el hero y la animación ambiental del mapa. El resto es quietud.

**Riesgo 5: que la oferta pierda claridad por huir de las tarjetas.**  
La oferta conserva una tarjeta fuerte, porque ahí la contención ayuda a decidir.

## 12. Decisiones cerradas

1. **Notas de margen:** aprobado con una excepción. Los eyebrows viven en el margen izquierdo en desktop, salvo en el hero, donde van encima del titular para ganar ancho.
2. **Hero asimétrico:** aprobado. Titular 7 columnas, foto 5 columnas sangrando a la derecha y franja de prueba debajo.
3. **Mapa desplegable:** revisado. Se conserva la composición de la v2: mapa centrado con ancho máximo de 1000 px y cuatro bloques 2×2 sin fondo de color, a 1280 px de ancho.
4. **Oferta como única tarjeta:** aprobado. La oferta es el único bloque con formato de tarjeta.
5. **Fotos:** aprobado con ajuste. El arco se reserva solo al hero; retrato, producto y testimonios pasan a placas rectangulares con pie de foto.
6. **Oferta:** aprobado. Variante A · Mesa de expedición: paisaje a sangre, encabezado centrado y tarjeta vertical centrada.

## 13. Dirección final de la v3

### Piezas clave

| Pieza | Decisión | Prototipo |
|---|---|---|
| Hero | Variante A con eyebrow encima del titular; 8 columnas de texto y 4 de foto con sangrado derecho; arco solo aquí; imagen al mismo tamaño. | [prototype-hero.html](../../v3/prototype-hero.html?variant=A) |
| Mapa | Composición de la v2 afinada: encabezado centrado, mapa de máximo 1000 px, cuatro bloques 2×2 sin fondo a 1280 px y ciclo centrado. | [prototype-map.html](../../v3/prototype-map.html?variant=A) |
| Oferta | Variante A · Mesa de expedición: paisaje a sangre, encabezado centrado y tarjeta vertical centrada. | [prototype-offer.html](../../v3/prototype-offer.html?variant=A) |

### Resto de bloques

- Story: Ensayo, con las voces interiores en un bloque de nota.
- Portrait: Lámina rectangular, sin arco; ficha debajo.
- Statement: Manifiesto oscuro, titular a la izquierda y bucle de “volver”.
- Mirror: Índice de seis frases con punto coral y remate a ancho completo.
- Product: Lámina + ruta vertical de tres pasos.
- Beyond: Ensayo sobre beige, un solo topográfico y cierre grande.
- Included: Índice oscuro de cuatro filas, sin tarjetas.
- Reassure: Lista de seis “no hace falta” en dos columnas.
- Testimonials: Voces separadas por reglas y foto ancha debajo.
- FAQ: Ensayo con titular a la izquierda y preguntas a la derecha.
- Closing: Manifiesto oscuro con isla de fondo y CTA.
- Footer: Colofón en tres columnas.
- Marquee: Cinta de una línea, más lenta, con olas pequeñas.

### Reglas de comportamiento

- **Mapa:** se mantiene la animación ambiental existente; sin hotspots ni navegación interactiva nueva. Las etiquetas del SVG se ven en desktop y se ocultan en móvil; los cuatro bloques hacen de leyenda. `prefers-reduced-motion` desactiva la animación y retira el caminante.
- **Decoración:** se conservan mapa, costas, textura de papel e iconos actuales. Los topográficos repetidos se limitan a Statement y Beyond. No se añaden fotos ni piezas de marca nuevas.
- **Tarjetas:** solo la oferta. El resto son listas, filas, láminas y ensayos.
- **Fotos:** arco solo en hero; retrato, producto y testimonios en placas rectangulares.
- **Navegación:** sticky en desktop; CTA inferior solo en móvil.

### Fase 2

La implementación se divide en:

- [Aplicar tokens, grid y chrome global](issues/07-tokens-grid-chrome.md)
- [Implementar hero y marquesina](issues/08-hero-marquesina.md)
- [Implementar bloques narrativos](issues/09-bloques-narrativos.md)
- [Implementar método](issues/10-metodo.md)
- [Implementar prueba y conversión](issues/11-prueba-conversion.md)
- [QA final de la v3](issues/12-qa-final.md)

Criterio de cierre: mismos textos, misma paleta, mismas tipografías y fotos; responsive; accesibilidad; reduced motion; sin errores locales.
