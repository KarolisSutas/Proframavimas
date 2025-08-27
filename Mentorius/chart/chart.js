console.log('Chart raidynas!');


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



const xReiksmes = ['A', 'B', 'C', 'D', 'E', 'F'];
const yReiksmes = xReiksmes.map(() => rand(1, 100));
console.log(yReiksmes);

const suma = yReiksmes.reduce((acc, sk) => acc + sk, 0);
console.log('suma:', suma);

const procentai = [];

yReiksmes.forEach((y, i) => {
    const procentas = (y / suma * 100).toFixed(0);
    procentai.push(procentas);
    console.log(procentai);
});


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
const duomenys = table.querySelector('[data-table-percentage]');
const duomenys2 = table.querySelector('[data-table-value]');


antraste.innerHTML = '';
duomenys.innerHTML = '';

procentai.forEach((p, i) => {
  const th = document.createElement('th'); 
  const td = document.createElement('td');  
  const td2 = document.createElement('td');  

  th.textContent = xReiksmes[i];
  th.style.backgroundColor = barSpalvos[i];
  td.textContent = p + '%';
  td2.textContent = yReiksmes[i];

  antraste.appendChild(th);
  duomenys.appendChild(td);
  duomenys2.appendChild(td2);
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
    type: "pie",
    data: {
        labels: xReiksmes,
        datasets: [{
            backgroundColor: barSpalvos,
            borderSize: 1,
            data: procentai
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