fetch('resumen.txt')
  .then(response => response.text())
  .then(data => {
    const eventos = data.trim().split(/(?:\r?\n){2,}/);
    let html = '<div class="p-1" id="alto">';

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
      <div class="card">
        <span class="badge">${eventoObj['Categoría'] || ''}</span>
        <div class="row">
          <div style="text-align: center; padding: 10px; border-right: 1px solid rgba(255,255,255,0.1); min-width: 65px;">
            <div class="fs-4">${eventoObj['Día'] || ''}</div>
            <div class="fs-7 text-uppercase">${eventoObj['Mes'] || ''}</div>
            <div class="fs-7 text-muted">${eventoObj['Hora'] || ''}</div>
          </div>
          <div style="padding-left: 10px; flex-grow: 1;">
            <div class="fs-6">${eventoObj['Evento'] || ''}</div>
            <div class="fs-8">${eventoObj['Lugar'] || ''}</div>
          </div>
        </div>
      </div>`;
    });

    html += '</div>'; // <--- ¡Cierre correcto del contenedor id="alto"!
    document.getElementById('resumen-contenido').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar el resumen:', error));