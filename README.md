# 📺 Cartelera Digital Dividida en Zonas

Este proyecto es una cartelera digital diseñada para pantallas Smart TV con Android TV. Muestra contenido dividido en 4 zonas (arriba/abajo - izquierda/derecha), cada una con su propia galería de imágenes en rotación automática.

---

## 🗂 Estructura del proyecto

cartelera-digital/
├── index.html → Página principal
├── manifest.json → Archivo generado automáticamente con la cantidad de imágenes por zona
├── js/
│ └── galerias.js → Script que gestiona las galerías por zona
├── resumen/
│ └── 1.jpg, 2.jpg, ... → Imágenes para la zona "resumen"
├── eventos/
│ └── 1.jpg, 2.jpg, ...
├── talleres/
│ └── 1.jpg, 2.jpg, ...
└── muestras/
└── 1.jpg, 2.jpg, ...


---

## 🖼 Nombres de zonas

Las 4 zonas de la pantalla están divididas en:

- `resumen`
- `eventos`
- `talleres`
- `muestras`

Cada una tiene su propia carpeta con imágenes numeradas (`1.jpg`, `2.jpg`, etc.).

---

## 🔁 Transiciones

Cada zona cambia de imagen automáticamente cada **5 segundos**, con una **transición suave** entre una imagen y otra.

---

## 🔧 Cómo actualizar el contenido

1. Reemplazá o agregá imágenes en las carpetas correspondientes (`resumen/`, `eventos/`, etc.)
2. edita el archivo `manifest.json` con la cantidad de imágenes por carpeta
3. Subí los cambios a GitHub (o reemplazá manualmente los archivos en GitHub)
    ✅ El archivo manifest.json indica cuántas imágenes hay en cada carpeta, y se actualiza solo al correr el script.

Este proyecto puede modificarse libremente bajo la licencia MIT.
