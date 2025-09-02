
let zodis, raides, uzslepta;

let klaidos = 0;
const maxKlaidos = 6;

const cage = document.getElementById('cage');            
const bars = Array.from(document.querySelectorAll('.bar')); 
const livesEl = document.getElementById('lives');


fetch('https://random-word-api.herokuapp.com/word')
  .then((res) => res.json())
  .then((data) => {
    zodis = String(data).toUpperCase();
    console.log('Zodis:', zodis);
    raides = zodis.split('');
    console.log('Raides:', raides);
    uzslepta = Array(raides.length).fill('_');

    renderHidden();
    cageAnimation();

    document.getElementById('resetBtn').addEventListener('click', () => { return location.reload(); });
    document.getElementById('checkBtn').addEventListener('click', checkLetter);
    document.getElementById('letterInput').addEventListener('keyup', (e) => {
      if (e.key === 'Enter') checkLetter();
    });
  });

function renderHidden() {
  const el = document.getElementById('hiddenWord');
  el.textContent = uzslepta ? uzslepta.join(' ') : '';
}

function cageAnimation() {

  bars.forEach((bar, i) => bar.style.opacity = (i < klaidos) ? 0 : 1);

  livesEl.textContent = Math.max(0, maxKlaidos - klaidos);

  if (klaidos >= maxKlaidos) {
    cage.style.background = 'center/cover no-repeat url("img/angryTiger.png")';
  } else {
    cage.style.background = 'center/cover no-repeat url("img/tiger.png")';
  }
}

function updateCage(newKlaidos) {
  klaidos = Math.max(0, Math.min(maxKlaidos, newKlaidos));
  cageAnimation();
}
    
function checkLetter() {

  const inputEl = document.getElementById('letterInput');
  const messageEl = document.getElementById('message');

  const input = inputEl.value.toUpperCase();
  inputEl.value = '';

  if (!/^[A-Z]$/.test(input)) {
    messageEl.textContent = 'Pirstai suskersavo, reikia A-Z.';
    return;
  }

  let spejimas = false;
  raides.forEach((raide, i) => {
    if (raide === input) {
      uzslepta[i] = raide;
      spejimas = true;
    }
  });

 if (spejimas) {
    messageEl.textContent = `Raide "${input}" rasta.`;
  } else {
    messageEl.textContent = `Raides "${input}" nera.`;
    updateCage(klaidos + 1);       
  }
  renderHidden();

  if (!uzslepta.includes('_')) {
    messageEl.textContent = `Valio!!! Zodis buvo "${zodis}".`;
  }
}



