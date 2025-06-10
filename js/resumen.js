fetch('resumen.txt')
  .then(response => response.text())
  .then(data => {
    const eventos = data.trim().split('\n\n');
    let html = '<div class="p-2 mb-3"><h2>Próximos Eventos</h2>';

    eventos.forEach(evento => {
      const lineas = evento.split('\n');
      let eventoObj = {};
      lineas.forEach(linea => {
        const [key, ...rest] = linea.split(':');
        if (key && rest.length > 0) {
          eventoObj[key.trim()] = rest.join(':').trim();
        }
      });

      html += `
      <div class="card mb-3 position-relative">
        <span class="badge rounded-pill text-bg-secondary position-absolute top-0 end-0">${eventoObj['Categoría'] || ''}</span>
        <div class="row g-0">
          <div class="col-auto align-self-center text-center p-2 border-end lh-1">
            <div class="fs-3 fw-bold">${eventoObj['Día'] || ''}</div>
            <div class="fs-6 text-uppercase">${eventoObj['Mes'] || ''}</div>
            <div class="fs-6 text-muted">${eventoObj['Hora'] || ''}</div>
          </div>
          <div class="col align-self-center p-2 mt-3">
            <div class="fw-semibold fs-6">${eventoObj['Evento'] || ''}</div>
            <div class="text-body-secondary">${eventoObj['Lugar'] || ''}</div>
          </div>
        </div>
      </div>`;
    });

    html += '</div>';
    document.getElementById('resumen').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar el resumen:', error));
