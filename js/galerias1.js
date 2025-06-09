
const zonas = [1, 2, 3, 4];
const intervalo = 5000; // 5 segundos
const totalImgs = 10; // Cambiar según cantidad real

zonas.forEach(z => {
  const zona = document.getElementById(`zona${z}`);
  const imgList = [];
  for (let i = 1; i <= totalImgs; i++) {
    const img = document.createElement('img');
    img.src = `zona${z}/img${i}.jpg`;
    if (i === 1) img.classList.add('active');
    zona.appendChild(img);
    imgList.push(img);
  }

  let index = 0;
  setInterval(() => {
    imgList[index].classList.remove('active');
    index = (index + 1) % imgList.length;
    imgList[index].classList.add('active');
  }, intervalo);
});
