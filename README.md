# 📺 Cartelera Digital Dividida en Zonas

Este proyecto es una cartelera digital diseñada para pantallas Smart TV con Android TV. Muestra contenido dividido en 4 zonas, cada una con su propia galería de imágenes en rotación automática.

Lá página se muestra en [https://culturaesquel.github.io/cartelera-melipal/](https://culturaesquel.github.io/cartelera-melipal/)

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
├── manifest.json 
├── galerias.txt → Archivo con la cantidad de imágenes por zona
├── resumen.txt → lista de eventos que aparece en la zona `resumen`
```
---

## 🖼 Nombres de zonas

Las 4 zonas de la pantalla están divididas en:

- `resumen` → columna izquierda de la pantalla
- `eventos` → columna del centro, la zona más grande
- `talleres` → columna derecha, arriba
- `muestras` → columna derecha, abajo

Cada muestra una galería de imágenes en loop que extrae de una carpeta exclusiva por zona. Excepto la zona `resumen`,  ésta, toma los datos del archivo `resumen.txt` y los muestraen una lista con formato de agenda. 

---

## 📁 Carpetas

Hay solo tres carpetas con imágenes que se deben ir actualizando, cada carpeta tiene las imágenes de la galería para una zona en particular.\
Las carpetas son:
- 📂eventos
- 📂talleres
- 📂muestras

Cada carpeta conitene imágenes numeradas en forma creciente (`1.jpg`, `2.jpg`, etc.).\
**es importante tener en cuenta:**
- que la numeración es símple: 1,2,3,4,5,6,7,8,9,10,11.... atención a **NO PONER** 01,02, etc.
- Es importante fijarse que sean archivos `.jpg` y **NO SEAN** `.png` , `.jpeg` u otros.
- Deben estar numeradas en orden el 1 al numero que llegue, pero no pueden haber numeros faltantes en el medio o al principio. no puede faltar el 1.jpg o que haya `1.jpg` y `3.jpg` pero que falte el `2.jpg`.
- La numeración da el orden de aparición, por lo que conviene numerar las fotos en orden cronolígoco según la fecha del evento.

---

## 🗒 Archivo `galerias.txt`
El archivo galerias.txt indica cuántas imágenes hay en cada carpeta, es decir, el numero más alto que haya en cada carpeta.

El archivo tiene este formato:
```
eventos: 4
talleres: 12
muestras: 4
```
Solo hay que modificar los numero con la cantidad de imágenes de cada carpeta, evitando modificar otras partes del texto, no agregar espacios de más o lineas vacias, porque se rompe el script.\
Luego el script tomará este numero máximo e incertará, en cada zona de la página web, la dirección a las imágenes desde el 1.jpg al numero máximo que indique este documento.

---

## 🗒 Archivo `resumen.txt`

✅Este archivo contiene la lista de eventos con campos detallados, que se mostrarán a la izquierda de la pantalla. El script toma de este archivo los datos de cada campo y los incerta en la página ya con un formato específico. Por lo que se deben respetar que siempre estén completos todos los campos. Es importante no dejar incompleto un campo. Hay que tener en cuneta que no existe orden automatico de los eventos, si no que el orden en que aparcenen los eventos en el archivo es como se va a mostrar en la página, por lo que **hay que tener el cuidado  de ordenar cronológicamente esta lista**.

los datos o campos para cada evento son:\
`Día:` → _solo el numero de día_ ej `18`\
`Mes:`→ _mes resumido_ ej `JUN`\
`Hora:`→ _hora, para resumir pongo solo la h, si hay dos horarios escribo `<br>` para que el segundo horario aparezca abajo_ ej `18:00 h` | si hay dos horarios `18:00 h <br>21:30 h`\
`Evento:`→ _nombre del evento_ ej `La Cuatica | PUEBLO CHICO`\
`Categoría:`→ _catigoría orientativa_ ej `cine` `teatro` `teatro/infantil` `inauguración de muestra`\
`Lugar:`→ _Lugar_ ej `Auditorio Municipal`\
`_separación de un parrafo_`→ _una separación de salto de linea vacía_ **esto es muy importante** porque hace que el script distinga un evento de otro.

---

## 🔧 Cómo actualizar el contenido

1. Reemplazá o agregá imágenes en las carpetas correspondientes (`muestras/`, `eventos/`,`talleres/`), considerando lo dicho anteriormente en la sección [Carpetas](#-carpetas).
2. edita el archivo `galerias.txt` con la cantidad de imágenes por carpeta, considerando la sección [Archivo galerias.txt](#-archivo-galeriastxt).
3. edita el archivo `resumen.txt` agregando todos los eventos que se quiera poner segun la sección [Archivo resumen.txt](#-archivo-resumentxt).
4. Subí los cambios a GitHub (o reemplazá manualmente los archivos en GitHub).
