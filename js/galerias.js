fetch('galerias.txt')
  .then(response => response.text())
  .then(text => {
    const manifest = {};
    text.trim().split('\n').forEach(linea => {
      const [zona, cantidad] = linea.split(':');
      if (zona && cantidad) {
        manifest[zona.trim()] = parseInt(cantidad.trim());
      }
    });

    Object.entries(manifest).forEach(([zona, cantidad]) => {
      const contenedor = document.getElementById(zona);
      if (!contenedor || cantidad === 0) return;

      const imgList = [];

      for (let i = 1; i <= cantidad; i++) {
        const img = document.createElement('img');
        img.src = `${zona}/${i}.jpg`;
        img.loading = "lazy";
        if (i === 1) img.classList.add('active');
        contenedor.appendChild(img);
        imgList.push(img);
      }

      let current = 0;
      setInterval(() => {
        imgList[current].classList.remove('active');
        current = (current + 1) % imgList.length;
        imgList[current].classList.add('active');
      }, 8000);
    });
  })
  .catch(error => console.error('Error al cargar manifest.txt:', error));

// script antiguo 
/*
fetch('manifest.json')
  .then(response => response.json())
  .then(manifest => {
    Object.entries(manifest).forEach(([zona, cantidad]) => {
      const contenedor = document.getElementById(zona);
      if (!contenedor || cantidad === 0) return;

      const imgList = [];

      for (let i = 1; i <= cantidad; i++) {
        const img = document.createElement('img');
        img.src = `${zona}/${i}.jpg`;
        if (i === 1) img.classList.add('active');
        contenedor.appendChild(img);
        imgList.push(img);
      }

      let current = 0;
      setInterval(() => {
        imgList[current].classList.remove('active');
        current = (current + 1) % imgList.length;
        imgList[current].classList.add('active');
      }, 5000);
    });
  });
  */
