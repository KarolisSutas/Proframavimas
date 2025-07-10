const dateEL = document.getElementsByClassName('date')[0];

const timeEL = document.getElementsByClassName('time')[0];
const hourEl = document.getElementsByClassName('hours')[0];
const minsEl = document.getElementsByClassName('minutes')[0];
const secsEl = document.getElementsByClassName('seconds')[0];
const pomoEl = document.getElementsByClassName('slider')[0];
const pomobgEl = document.getElementsByClassName('pomodoro-bg')[0];


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
    
    dateEL.textContent = 
    weekDays[weekDay] + ', ' + months[month] + ' ' + day + ' d.'; 
    hourEl.style.transform = 'rotate(' + h * 30 + 'deg)';
    minsEl.style.transform = 'rotate(' + m * 6 + 'deg)';
    secsEl.style.transform = 'rotate(' + s * 6 + 'deg)';


    setTimeout(clock, 1000);
}

function addZero(t) {
    if (t < 10) {
        t = '0' + t;
    }
    return t;
}

clock();

// POMODORO

let isPomoOn = false;

pomoEl.addEventListener('click', () => {
    isPomoOn ? isPomoOn = false : isPomoOn = true;
    pomoEl.classList.toggle('active'); // invertina klase, pakeicia arba uzdeda jeigu nebuvo
    show(false);
    pomobgEl.classList.add('show');
    isPomoOn ? work() : kill();
});

function work() {
    timeEL.classList.remove('chill');
    timeEL.classList.add('work');
    isPomoOn ? setTimeout(chill, 25 * 60 * 1000) : kill(); // pakeisti 60 kad butu 25min o ne sekund
};

function chill() {
    timeEL.classList.remove('work');
    timeEL.classList.add('chill');
    show(true);
    isPomoOn ? setTimeout(work, 5 * 60 * 1000) : kill(); // pakeistii 60 kad butu 25min o ne sekund
};

function kill() {
    timeEL.classList.remove('chill');
    timeEL.classList.remove('work');
    pomobgEl.classList.remove('show');
};

function show(afterFive) {
    const now = new Date();
    let min = now.getMinutes(); // getMinutes pakeisti 
    afterFive ? (min += 5) : min;
    min > 59 ? (min -= 60) : min;
    const deg = min * 6 + 90;
    pomobgEl.style.transform = 'rotate(' + deg + 'deg)';
}




