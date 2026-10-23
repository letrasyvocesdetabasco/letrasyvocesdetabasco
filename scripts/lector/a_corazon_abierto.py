"""Prepara las páginas de «A corazón abierto» para barajar.py.

El PDF final viene en pliegos horizontales de carta con dos páginas por hoja:
la hoja 1 es la cubierta completa (contraportada | portada, una sola imagen JPEG)
y las hojas 2 a 42 llevan las páginas 1-82 en orden (impar a la izquierda, par a la derecha).

Salida en <dir_salida>: p000.png (portada), p001.png ... p082.png (interior) y p999.png (contraportada),
todas de ANCHO x ALTO (media carta), y portada.webp / portada_chica.webp para el sitio.

Uso: python3 a_corazon_abierto.py <libro.pdf> <dir_salida>
"""
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

ANCHO, ALTO = 1200, 1856
# Recortes de la imagen de cubierta (1518 x 1122 px): por dentro del filete de corte de la portada, sin el fondo gris
# del montaje, y la contraportada al mismo tamaño (proporción de media carta)
RECORTE_PORTADA = (797, 19, 1491, 1094)
RECORTE_CONTRAPORTADA = (24, 17, 718, 1092)


def main() -> None:
    pdf, salida = Path(sys.argv[1]), Path(sys.argv[2])
    salida.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        subprocess.run(["pdfimages", "-j", "-f", "1", "-l", "1", str(pdf), str(tmp / "cubierta")], check=True)
        cubierta = Image.open(next(tmp.glob("cubierta-*.jpg"))).convert("RGB")
        portada = cubierta.crop(RECORTE_PORTADA)
        portada.resize((ANCHO, ALTO), Image.LANCZOS).save(salida / "p000.png")
        cubierta.crop(RECORTE_CONTRAPORTADA).resize((ANCHO, ALTO), Image.LANCZOS).save(salida / "p999.png")
        portada.save(salida / "portada.webp", "WEBP", quality=86, method=6)
        portada.resize((480, round(480 * portada.height / portada.width)), Image.LANCZOS).save(salida / "portada_chica.webp", "WEBP", quality=84, method=6)

        subprocess.run(["pdftoppm", "-png", "-f", "2", "-scale-to-x", str(ANCHO * 2), "-scale-to-y", str(ALTO), str(pdf), str(tmp / "hoja")], check=True)
        pagina = 1
        for hoja in sorted(tmp.glob("hoja-*.png")):
            im = Image.open(hoja).convert("RGB")
            for x in (0, ANCHO):
                im.crop((x, 0, x + ANCHO, ALTO)).save(salida / f"p{pagina:03d}.png")
                pagina += 1
    print(f"{pagina - 1} páginas interiores + portada y contraportada en {salida}")


if __name__ == "__main__":
    main()
