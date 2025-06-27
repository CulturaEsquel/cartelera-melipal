function iniciarScrollVertical() {
  const resumen = document.getElementById('resumen');
  const contenido = document.getElementById('resumen-contenido');
  const titulo = 50;

  if (!resumen || !contenido) return;

  const alturaContenedor = resumen.clientHeight;
  const alturaContenido = contenido.scrollHeight;

  const diferencia = alturaContenido - alturaContenedor - titulo;
  if (diferencia <= 0) return; // No animar si no hay desborde

  contenido.animate([
    { transform: 'translateY(0)' },
    { transform: `translateY(-${diferencia}px)` }
  ], {
    duration: 5000,
    direction: 'alternate',
    iterations: Infinity,
    easing: 'ease-in-out'
  });
}

// Ejecutar después de que el contenido se haya cargado
window.addEventListener('load', () => {
  setTimeout(iniciarScrollVertical, 500); // espera breve por seguridad
});
