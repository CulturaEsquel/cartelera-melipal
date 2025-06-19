fetch('resumen.txt')
  .then(response => response.text())
  .then(data => {
    const eventos = data.trim().split(/(?:\r?\n){2,}/);
    let html = '';

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
      <div class="card mb-2 position-relative lh-1">
        <span class="badge rounded-pill text-bg-secondary position-absolute top-0 end-0">${eventoObj['Categoría'] || ''}</span>
        <div class="row g-0">
          <div class="col-auto align-self-center text-center p-2 border-end">
            <div class="fs-4 fw-bold">${eventoObj['Día'] || ''}</div>
            <div class="fs-7 text-uppercase">${eventoObj['Mes'] || ''}</div>
            <div class="fs-7 text-muted">${eventoObj['Hora'] || ''}</div>
          </div>
          <div class="col align-self-center p-2 mt-3">
            <div class="fw-semibold fs-7">${eventoObj['Evento'] || ''}</div>
            <div class="text-body-secondary fs-8">${eventoObj['Lugar'] || ''}</div>
          </div>
        </div>
      </div>`;
    });

    html += '</div>';
    document.getElementById('resumen-contenido').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar el resumen:', error));
