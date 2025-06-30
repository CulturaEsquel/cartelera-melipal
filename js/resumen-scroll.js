function iniciarScrollVertical() {
  const resumen = document.getElementById('resumen');
  const contenido = document.getElementById('alto');
  const titulo = 47;

  if (!resumen || !contenido) return;

  const alturaContenedor = resumen.clientHeight - titulo;
  const alturaContenido = contenido.scrollHeight;

  const diferencia = alturaContenido - alturaContenedor;
  if (diferencia <= 0) return; // No animar si no hay desborde

  contenido.animate([
    { transform: 'translateY(0)' },
    { transform: `translateY(-${diferencia}px)` }
  ], {
    duration: 10000,
    direction: 'alternate',
    iterations: Infinity,
    easing: 'ease-in-out'
  });
}

// Ejecutar después de que el contenido se haya cargado
window.addEventListener('load', () => {
  setTimeout(iniciarScrollVertical, 1000); // espera breve por seguridad
});
