"""Genera las páginas protegidas del lector de «Animalia Literaria».

Cada página se divide en una rejilla de COLS x FILAS piezas con un margen
replicado (PAD) para evitar costuras, y las piezas se guardan barajadas con una
permutación determinista (mulberry32) que el lector reconstruye en un canvas.
El archivo de imagen por sí solo es un rompecabezas ilegible.

Uso: python3 barajar.py <dir_png> <dir_salida_publica> <manifiesto.json>
"""
import json
import secrets
import sys
from pathlib import Path

import numpy as np
from PIL import Image

COLS, FILAS, PAD = 4, 8, 6
ANCHO, ALTO = 1200, 1840
TW, TH = ANCHO // COLS, ALTO // FILAS
SAL = 0x1F2E3D
CALIDAD = 74


def imul(x: int, y: int) -> int:
    return (x * y) & 0xFFFFFFFF


def mulberry32(a: int):
    estado = a & 0xFFFFFFFF

    def siguiente() -> float:
        nonlocal estado
        estado = (estado + 0x6D2B79F5) & 0xFFFFFFFF
        t = imul(estado ^ (estado >> 15), 1 | estado)
        t = ((t + imul(t ^ (t >> 7), 61 | t)) & 0xFFFFFFFF) ^ t
        return ((t ^ (t >> 14)) & 0xFFFFFFFF) / 4294967296

    return siguiente


def permutacion(indice: int) -> list[int]:
    r = mulberry32((indice * 2654435761 + SAL) & 0xFFFFFFFF)
    p = list(range(COLS * FILAS))
    for i in range(len(p) - 1, 0, -1):
        j = int(r() * (i + 1))
        p[i], p[j] = p[j], p[i]
    return p


def es_blanca(arr: np.ndarray) -> bool:
    return arr.min() >= 245


def barajar(arr: np.ndarray, indice: int) -> Image.Image:
    rel = np.pad(arr, ((PAD, PAD), (PAD, PAD), (0, 0)), mode="edge")
    cw, ch = TW + 2 * PAD, TH + 2 * PAD
    salida = np.zeros((FILAS * ch, COLS * cw, 3), dtype=np.uint8)
    for j, k in enumerate(permutacion(indice)):
        ox, oy = (k % COLS) * TW, (k // COLS) * TH
        pieza = rel[oy:oy + ch, ox:ox + cw]
        dx, dy = (j % COLS) * cw, (j // COLS) * ch
        salida[dy:dy + ch, dx:dx + cw] = pieza
    return Image.fromarray(salida)


def main() -> None:
    dir_png, dir_pub, ruta_manifiesto = map(Path, sys.argv[1:4])
    dir_pub.mkdir(parents=True, exist_ok=True)
    for viejo in dir_pub.glob("*.webp"):
        viejo.unlink()
    orden = [dir_png / "p000-1.png"] + sorted(dir_png.glob("int-*.png")) + [dir_png / "p999-1.png"]
    paginas = []
    total = 0
    for indice, ruta in enumerate(orden):
        im = Image.open(ruta).convert("RGB")
        if im.size != (ANCHO, ALTO):
            im = im.resize((ANCHO, ALTO), Image.LANCZOS)
        arr = np.asarray(im)
        if es_blanca(arr):
            paginas.append(None)
            continue
        nombre = secrets.token_hex(8) + ".webp"
        barajar(arr, indice).save(dir_pub / nombre, "WEBP", quality=CALIDAD, method=6)
        total += (dir_pub / nombre).stat().st_size
        paginas.append(nombre)
    manifiesto = {
        "ancho": ANCHO, "alto": ALTO, "cols": COLS, "filas": FILAS, "pad": PAD, "sal": SAL,
        "base": "/" + dir_pub.as_posix().split("/public/", 1)[1] + "/",
        "paginas": paginas,
    }
    ruta_manifiesto.write_text(json.dumps(manifiesto, ensure_ascii=False), encoding="utf-8")
    blancas = sum(1 for p in paginas if p is None)
    print(f"{len(paginas)} páginas, {blancas} en blanco, {total / 1e6:.1f} MB")
    print("permutación página 5:", permutacion(5)[:12])


if __name__ == "__main__":
    main()
