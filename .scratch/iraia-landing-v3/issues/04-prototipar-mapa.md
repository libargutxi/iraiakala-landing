# Prototipar el mapa en tres variantes

Type: prototype
Status: resolved
Blocked by: 01, 02

## Question

Explorar tres composiciones para el bloque del mapa dentro de **Bitácora editorial**, conservando el SVG del mapa y los cuatro lugares. Probar escala, relación con las fichas, hover sutil y comportamiento móvil. Sin hotspots ni navegación interactiva en esta v3.

Enlazar el artefacto como asset y anotar qué pregunta resuelve cada variante.

## Comments

- Prototipo: [prototype-map.html](../../../v3/prototype-map.html).
- Variantes: `?variant=A` (Desplegable), `?variant=B` (Índice lateral), `?variant=C` (Travesía).
- A = V2 afinado: mapa centrado de máximo 1000 px + bloques 2×2 sin fondo a 1280 px y ciclo centrado; B = mapa sticky a la derecha + índice vertical a la izquierda; C = sección oscura con mapa a sangre y cronología vertical.

## Answer

Se elige la **composición de la v2 afinada** (variante A revisada): encabezado centrado, mapa con ancho máximo de 1000 px y los cuatro bloques en 2×2 sin fondo de color, a 1280 px de ancho. El mapa deja de ser un desplegable a sangre; se mantiene la escala contenida de la v2, que se lee mejor. La diferencia de anchos entre mapa y bloques es deliberada.

- Prototipo actualizado: [prototype-map.html](../../../v3/prototype-map.html?variant=A).
- B y C quedan descartadas como dirección, pero permanecen en el prototipo como referencia.
- Comprobado en escritorio y móvil; textos, iconos, paleta y SVG del mapa se mantienen.
