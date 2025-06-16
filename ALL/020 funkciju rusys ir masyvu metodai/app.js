console.log('Labas, Marsai');
console.log('Labas, Venera');


let funRezultatas; 

function fun1(a) { // vardine funkcija
    return a * 7;
    
}

funRezultatas = fun1(3);
console.log(funRezultatas);

// ................

const fun2 = function(a) { // anonimine
    return a * 7;
}

funRezultatas = fun2(3);
console.log(funRezultatas);

//...................

const fun3 = (a) => {
    return a * 7;
}

funRezultatas = fun3(3);
console.log(funRezultatas);

//....................
console.clear();
const obuoliai = function() {
    console.log('Paprasta:', this);
    return this.sakos * 8;
}

const obuoliaiRodykle = () => {
    console.log('Rodykle:', this);
    return this.sakos * 8;
}

const medis = {};
medis.sakos = 10;
medis.obuoliai = obuoliai;
medis.obuoliaiRodykle = obuoliaiRodykle;

console.log('Paprasta:', medis.obuoliai());
console.log('Rodykle:', medis.obuoliaiRodykle());

//...................

// jeigu parametru skaicius yra 1 tai galim praleist argumentu apvalius skliaustelius
const fun4 = a => { 
    return a * 7;
}

funRezultatas = fun4(3);
console.log(funRezultatas);

//.......................

// jeigu funkcijos kodo eilute yra irgi tik 1 tada galim praleisti garbanotus bloko skliaustelius ir negalima rasyti return
const fun5 = a => a * 7;

funRezultatas = fun5(3);
console.log(funRezultatas);

//.......................

const fun6 = _ => 'Bebras '.repeat(5);

funRezultatas = fun6();
console.log(funRezultatas);

//...................

const colors = ['green', 'blue', 'yellow', 'pink', 'black'];
// su ciklu konsoleje atspausdinti spalvas po viena spalva



// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

//  const elemPrint = function(el, index) {
//      console.log(index, el);
// }

// colors.forEach(elemPrint); 

colors.forEach(el => console.log(el));

//........................

//

const digits = [5, 8, 74, 0, 32, 75, 4];
// su ciklu foreach konsoleje atspausdinti skaicius po viena skaiciu stulpeliu
digits.forEach(el => console.log(el));

// su ciklu foreach konsoleje atspausdinti skaicius po viena skaiciu padauginta is 3

digits.forEach(el => console.log(el * 3));

// su ciklu foreach konsoleje atspausdinti skaicius po viena skaiciu stulpeliu bet ne ==0

digits.forEach(el => el && console.log(el)); // trumpas užrašymas



digits.forEach(el => {
    if (el != 0) {
        console.log(el);
    }
});

//...................



const fe = colors.forEach(el => console.log(el));
console.log(fe);



const mp = colors.map(el => '<li>' + el + '</li>'); // kuriam masyvo kopija kuria norim siek tiek modifikuoti
console.log(mp);


const digits2 = [5, 8, 74, 0, 32, 75, 4];
// su map metodu sukurkite nauja masyva, kuriame butu seno masyvo skaiciai padauginti is 8
const mp2 = digits2.map(el => el * 8);
console.log(mp2);


