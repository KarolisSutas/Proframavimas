console.log('Chart raidynas!');


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const xReiksmes = ['A', 'B', 'C', 'D', 'E', 'F'];
const yReiksmes = xReiksmes.map(() => rand(1, 100));
console.log(yReiksmes);

const barSpalvos = [
    'LightCoral',
    'LightSeaGreen',
    'LightSalmon',
    'RoyalBlue',
    'Sienna',
    'DarkSeaGreen'
];

const table = document.querySelector('[data-content]');
const antraste = table.querySelector('[data-tabel-header]');
const duomenys = table.querySelector('[data-table-data]');


antraste.innerHTML = '';
duomenys.innerHTML = '';

yReiksmes.forEach((y, i) => {
  const th = document.createElement('th'); 
  const td = document.createElement('td');  

  th.textContent = xReiksmes[i];
  th.style.backgroundColor = barSpalvos[i];
  td.textContent = y;

  antraste.appendChild(th);
  duomenys.appendChild(td);
});

// Bar Chart

new Chart(document.getElementById('BarChart'), {
    type: 'bar',
    data: {
        labels: xReiksmes,
        datasets: [{
            backgroundColor: barSpalvos,
            data: yReiksmes
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Raidžių Bar Chart\'as'
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Pie Chart

new Chart(document.getElementById('PieChart'), {
    type: "doughnut",
    data: {
        labels: xReiksmes,
        datasets: [{
            backgroundColor: barSpalvos,
            borderSize: 1,
            data: yReiksmes
        }]
    },
    options: {
        responsive: false,
        title: {
            display: true,
            text: "Raidžių pyragas"
        }
    }
});