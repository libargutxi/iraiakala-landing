# Elegir la dirección final y congelar el sistema

Type: grilling
Status: resolved
Blocked by: 03, 04, 05

## Question

Comparar las variantes de hero, mapa y oferta, elegir una línea y consolidar el sistema que guiará el resto de bloques. Resolver qué variantes se descartan, qué piezas se reutilizan y qué excepciones se permiten.

Salir con el sistema cerrado y el desglose de implementación listo para crear los tickets de la fase 2.

## Answer

Dirección final consolidada en [design-system.md](../design-system.md):

- **Hero:** variante A con eyebrow encima del titular, 8 columnas de texto y 4 de foto.
- **Mapa:** composición de la v2 afinada; mapa de máximo 1000 px y bloques 2×2 sin fondo a 1280 px.
- **Oferta:** variante A · Mesa de expedición; tarjeta vertical centrada.

Se mantienen el resto de arquetipos del sistema y las reglas de mapa, decoración, tarjetas y fotos. La implementación queda dividida en seis tickets: tokens/chrome, hero/marquesina, narrativa, método, prueba/conversión y QA final.
