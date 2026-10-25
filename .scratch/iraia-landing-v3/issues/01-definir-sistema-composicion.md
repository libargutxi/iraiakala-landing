# Definir el sistema de composición de la v3

Type: grilling
Status: resolved

## Question

Convertir la dirección **Bitácora editorial** en un sistema concreto que permita diseñar los 14 bloques sin improvisar: grid y anchos, escala tipográfica y ritmos, arquetipos de sección, tratamiento de imágenes, política de tarjetas, uso de márgenes/anotaciones y una pieza gráfica protagonista por bloque.

Debe respetar los invariantes del mapa (textos, paleta, fuentes y fotos) y dejar por escrito qué composiciones se descartan por genéricas o por repetir la v2.

Entregable: una decisión documentada, no código de producción.

## Comments

- Borrador del sistema: [design-system.md](../design-system.md). Pendiente de aprobación de las cinco decisiones del final.

## Answer

Sistema aprobado y congelado en [design-system.md](../design-system.md).

Decisiones cerradas:

1. **Notas de margen:** los eyebrows viven en el margen izquierdo en desktop.
2. **Hero asimétrico:** titular 7 columnas, foto 5 columnas sangrando a la derecha y franja de prueba debajo.
3. **Mapa desplegable:** mapa grande + leyenda en filas, sin las cuatro tarjetas actuales.
4. **Oferta como única tarjeta:** la oferta es el único bloque con formato de tarjeta.
5. **Fotos:** el arco se reserva solo al hero; retrato, producto y testimonios pasan a placas rectangulares con pie de foto.

La v3 usará grid de 12 columnas, seis arquetipos de sección, una pieza protagonista por bloque y movimiento contenido. La implementación conservará textos, paleta, tipografías y fotos.
