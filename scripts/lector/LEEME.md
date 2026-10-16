# Lector en línea de libros (solo lectura)

El lector de `/publicaciones/animalia-literaria/leer` no publica ningún PDF. Cada página se guarda como una imagen WebP
dividida en 32 piezas barajadas; el navegador las recompone en un lienzo (`canvas`) con la misma permutación
(mulberry32) que usa `barajar.py`. Un archivo descargado por separado es un rompecabezas ilegible.

Medidas adicionales: sin menú contextual ni arrastre sobre el libro, Ctrl+S / Ctrl+P / Ctrl+U bloqueados en el lector,
página de impresión vacía, marca de lectura en el margen inferior, nombres de archivo aleatorios y `robots.txt`
con `Disallow: /lectura/`. Ninguna página web puede impedir del todo una captura de pantalla; estas medidas
evitan la descarga directa del libro.

## Regenerar las páginas (si cambia el PDF)
```bash
D="$HOME/Escritorio/ENTREGA_FINAL_IMPRENTA_ANIMALIA_LITERARIA/01_ARCHIVOS_PARA_IMPRENTA_PDF_FINAL"
T=$(mktemp -d)
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/02_PORTADA_INDIVIDUAL_14x21.5.pdf" "$T/p000"
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/03_CONTRAPORTADA_INDIVIDUAL_14x21.5.pdf" "$T/p999"
pdftoppm -png -scale-to-x 1200 -scale-to-y 1840 "$D/04_INTERIOR_PAGINAS_INDIVIDUALES_14x21.5_ALTA_RESOLUCION.pdf" "$T/int"
python3 scripts/lector/barajar.py "$T" public/lectura/al src/data/animalia_lector.json
```
Requiere `poppler` (pdftoppm), Python 3 con Pillow y NumPy. El índice del libro está en `src/data/animalia.ts`.
