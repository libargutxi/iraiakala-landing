# Implementar hero y marquesina

Type: task
Status: resolved
Blocked by: 07

## Question

Implementar el hero elegido: eyebrow encima del titular, 8 columnas de texto y 4 de foto, arco solo en el hero, marco de papel y la imagen al mismo tamaño del prototipo. Añadir la marquesina de una línea con las olas pequeñas.

Conservar copy, paleta, tipografías y foto. Ajustar responsive y reduced motion.

Referencia: [prototype-hero.html](../../../v3/prototype-hero.html?variant=A).

## Answer

Implementado el hero A en `v3/la-isla.html`:

- Eyebrow encima del titular.
- Titular de 8 columnas y foto de 4.
- Arco y marco de papel solo en el hero, con la foto al tamaño del prototipo.
- CTA y precio en la misma línea; franja de prueba al final.
- Marquesina de una línea, más lenta y con olas pequeñas.

Verificado en 1440, 1024 y 390 px. Los bloques posteriores siguen siendo los de la v2 hasta los tickets 09–11.

## Comments

- Corrección tras revisión: la foto del hero ahora sangra a la derecha (`margin-right: -gutter`), tiene el desplazamiento superior del prototipo y el copy ya no lleva padding extra. También se alinearon el tamaño del lead y el titular móvil con la variante A.
