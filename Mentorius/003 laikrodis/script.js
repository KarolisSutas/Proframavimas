const dateEL = document.getElementsByClassName('date')[0];

const timeEL = document.getElementsByClassName('time')[0];
const hourEl = document.getElementsByClassName('hours')[0];
const minsEl = document.getElementsByClassName('minutes')[0];
const secsEl = document.getElementsByClassName('seconds')[0];

const weekDays = [
    'Sekmadienis',
    'Pirmadienis',
    'Antradienis',
    'Trečiadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Šeštadienis'
];

const months = [
    'Sausio',
    'Vasario',
    'Kovo',
    'Balandžio',
    'Gegužės',
    'Birželio',
    'Liepos',
    'Rugpjūčio',
    'Rugsėjo',
    'Spalio',
    'Lapkričio',
    'Gruodžio',
]

function clock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    let month = now.getMonth();
    let weekDay = now.getDay();
    let day = now.getDate();

    timeEL.textContent = h + ':' + m + ':' + s;
    setTimeout(clock, 1000);

    dateEL.textContent = 
    weekDays[weekDay] + ', ' + months[month] + ' ' + day + ' d.'; 
    hourEl.style.transform = 'rotate(' + h * 30 + 'deg)';
    minsEl.style.transform = 'rotate(' + m * 6 + 'deg)';
    secsEl.style.transform = 'rotate(' + s * 6 + 'deg)';

}

function addZero(t) {
    if (t < 10) {
        t = '0' + t;
    }
    return t;
}

clock();

