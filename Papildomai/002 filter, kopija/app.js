console.log('Labas, filtrai');


// FILTRAS

const skaiciai = [3, -1, 0, 7, -5, 10, -8];

const teigiamas = skaiciai.filter( sk => sk > 0);
console.log(teigiamas);

//......................

const vartotojai = [
    { vardas: 'Jonas', amzius: 25 },
    { vardas: 'Asta', amzius: 17 },
    { vardas: 'Dainius', amzius: 34 },
    { vardas: 'Miglė', amzius: 15 },
    { vardas: 'Tomas', amzius: 20 }
  ];

const pilnameciai = vartotojai.filter( a => a.amzius >= 18);

console.log(pilnameciai);

const vardaiSUD = vartotojai.filter( v => v.vardas.startsWith('D'));

console.log(vardaiSUD);

const raidziusk = vartotojai.filter( sk => sk.vardas.length < 6 && sk.amzius > 18);

console.log(raidziusk);
//..............................
// BY VALUE ir BY REFFERENCE

let obj1 = { x: 10 };
let obj2 = obj1;  // obj2 gauna nuorodą į tą patį objektą
obj2.x = 20;
console.log(obj1.x); // 20 - nes obj1 ir obj2 rodo į tą patį objektą


const pakeisk = skaicius => {
    skaicius = 100;
    console.log('funkcijoje:', skaicius);
  }
  
  let a = 50;
  pakeisk(a);
  console.log('po funkcijos:', a);


  function pakeiskObjekta(obj) {
    obj.name = 'Antanas';
    console.log('funkcijoje:', obj.name);
  }
  
  let zmogus = { name: 'Jonas' };
  pakeiskObjekta(zmogus);
  console.log('po funkcijos:', zmogus.name);

  //pakeiskBeKopijos(obj) – ji keičia obj.name į 'Antanas', be jokios kopijos.
  //pakeiskSuKopija(obj) – ji sukuria kopiją ir keičia tik jos vardą į 'Antanas', o originalas turi likti nepakitęs.

  
  let zmogus1 = { name: 'Jonas' };

  function pakeiskBeKopijos(obj) {
      obj.name = 'Antanas'; // tiesiogiai keičiame originalą
  }
  
  function pakeiskSuKopija(obj) {
      let kopija = { ...obj }; // darome paviršinę (shallow) kopiją
      kopija.name = 'Petras';
      console.log('Vardas kopijoje:', kopija.name); // 'Petras'
  }
  
  pakeiskBeKopijos(zmogus1);
  console.log('Po pakeiskBeKopijos:', zmogus1.name); // Antanas
  
  pakeiskSuKopija(zmogus1);
  console.log('Po pakeiskSuKopija:', zmogus1.name); // Antanas (nepasikeitė į Petras)
