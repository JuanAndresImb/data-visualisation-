
  document.addEventListener('DOMContentLoaded', (event) => {
    // Extraer los datos de la tabla
    const dataTable = document.querySelector('tbody');
    const dataRows = dataTable.querySelectorAll('tr');

    // Encontrar los años
    const headers = dataTable.querySelector('tr:nth-child(1)').children;
    const years = [];
    for (let i = 2; i < headers.length; i++) {
      years.push(headers[i].innerText.trim());
    }

    // Extraer los datos para Bélgica (primer país en la tabla)
    const belgiumData = [];
    const belgiumRow = dataRows[1].children;
    for (let i = 2; i < belgiumRow.length; i++) {
      belgiumData.push(parseFloat(belgiumRow[i].innerText.replace(',', '.')));
    }

    // Crear el gráfico usando Chart.js
    const ctx = document.getElementById('chart1').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Belgium (in thousands)',
          data: belgiumData,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

