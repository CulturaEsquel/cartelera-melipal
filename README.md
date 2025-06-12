# 📺 Cartelera Digital Dividida en Zonas

Este proyecto es una cartelera digital diseñada para pantallas Smart TV con Android TV. Muestra contenido dividido en 4 zonas, cada una con su propia galería de imágenes en rotación automática.

---

## 🗂 Estructura del proyecto
```
cartelera-melipal/
├── css/
  └── styles.css → estilos css adicionales
├── eventos/
  └── 1.jpg, 2.jpg, ...
├── img/ → esta carpeta contiene imágenes de recursos fijos, como un código QR
├── js/
  └── galerias.js → Script que gestiona las galerías por zona
  └── resumen.js → Script que toma los datos del archivo `resumen.txt` y los incerta en la zona `resumen`
├── muestras/
  └── 1.jpg, 2.jpg, ...
├── talleres/
  └── 1.jpg, 2.jpg, ...
├── index.html → Página principal
├── manifest.json → Archivo con la cantidad de imágenes por zona
├── resumen.txt → lista de eventos que aparece en la zona `resumen`
```
---

## 🖼 Nombres de zonas

Las 4 zonas de la pantalla están divididas en:

- `resumen`
- `eventos`
- `talleres`
- `muestras`

Cada una tiene su propia carpeta con imágenes numeradas (`1.jpg`, `2.jpg`, etc.).\
Excepto la zona `resumen`.  Esta zona toma los datos del archivo `resumen.txt` y los muestra formateados

---

## 🗒 Archivo `manifest.json`
El archivo manifest.json indica cuántas imágenes hay en cada carpeta.

El archivo tiene este formato:
```
{
  "eventos": 4,
  "talleres": 12,
  "muestras": 4
}
```
Solo hay que modificar los numero con la cantidad de imágenes de cada carpeta, evitando modificar otras partes del texto, si se borra un `;` o un `{` se rompe el script

---

## 🗒 Archivo `resumen.txt`

✅Este archivo contiene la lista de eventos que se muestran a la izquierda de la pantalla, con campos detallados. La página toma de este archivo los datos de cada campo y los incerta en la página ya con un formato específico. Por lo que se deben respetar que siempre esten  los campos necesarios.

los datos o campos para cada evento son:\
`Día:` → _solo el numero de día_ ej `18`\
`Mes:`→ _mes resumido_ ej `JUN`\
`Hora:`→ _hora, para resumir pongo solo la h, si hay dos horarios escribo <br> para que el segundo horario aparezca abajo_ ej `18:00 h` | si hay dos horarios `18:00 h <br>21:30 h`\
`Evento:`→ _nombre del evento_ ej `La Cuatica | PUEBLO CHICO`\
`Categoría:`→ _catigoría orientativa_ ej `cine` `teatro` `teatro/infantil` `inauguración de muestra`\
`Lugar:`→ _Lugar_ ej `Auditorio Municipal`\
`_salto de linea_`→ _una separación de salto de linea vacía_ (esto es muy importante porque hace que el script detecte que es un evento distinto)

---

## 🔁 Transiciones

Cada zona cambia de imagen automáticamente cada **5 segundos**, con una **transición suave** entre una imagen y otra.

---

## 🔧 Cómo actualizar el contenido

1. Reemplazá o agregá imágenes en las carpetas correspondientes (`muestras/`, `eventos/`,`talleres/`), deben estar numeradas desde el 1 al numero que llegue, no pueden haber numeros faltantes (ej, no puede pasar que haya `1.jpg` y `3.jpg` pero que falte el `2.jpg`).
2. edita el archivo `manifest.json` con la cantidad de imágenes por carpeta, es decir, el último numero más alto que haya en la carpeta.
3. edita el archivo `resumen.txt` agregando todos los eventos que se quieran poner
4. Subí los cambios a GitHub (o reemplazá manualmente los archivos en GitHub)\

Este proyecto puede modificarse libremente bajo la licencia MIT.
