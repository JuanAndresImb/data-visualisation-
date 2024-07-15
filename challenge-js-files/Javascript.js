document.addEventListener('DOMContentLoaded', (event) => {
    // Extraer los datos de la tabla
    const dataTable = document.querySelector('tbody');
    const dataRows = dataTable.querySelectorAll('tr');
    
    // Encontrar los años
    const headers = document.querySelector('thead').querySelector('tr').children;
    const years = [];
    for (let i = 1; i < headers.length; i++) {
        years.push(headers[i].innerText.trim());
    }

    // Función para extraer datos de un país
    function getCountryData(row) {
        const data = [];
        const cells = row.children;
        for (let i = 1; i < cells.length; i++) {
            data.push(parseFloat(cells[i].innerText.replace(',', '.')));
        }
        return data;
    }

    // Extraer los datos para Bélgica y Bulgaria
    const belgiumData = getCountryData(dataRows[0]);
    const bulgariaData = getCountryData(dataRows[1]);

    // Crear el gráfico usando Chart.js
    const ctx = document.getElementById('chart1').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Bélgica (en miles)',
                    data: belgiumData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Bulgaria (en miles)',
                    data: bulgariaData,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    fill: false
                }
            ]
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
