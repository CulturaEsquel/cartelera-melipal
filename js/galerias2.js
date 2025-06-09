fetch('manifest.json')
  .then(response => response.json())
  .then(manifest => {
    Object.entries(manifest).forEach(([zona, imagenes]) => {
      const contenedor = document.getElementById(zona);
      if (!contenedor || imagenes.length === 0) return;

      const imgList = [];

      imagenes.forEach((imgName, index) => {
        const img = document.createElement('img');
        img.src = `${zona}/${imgName}`;
        if (index === 0) img.classList.add('active');
        contenedor.appendChild(img);
        imgList.push(img);
      });

      let current = 0;
      setInterval(() => {
        imgList[current].classList.remove('active');
        current = (current + 1) % imgList.length;
        imgList[current].classList.add('active');
      }, 5000);
    });
  });