console.log('Nu ką bandom!');

function vidurkis(...skaiciai) {
    if (skaiciai.length == 0) {
        console.log('Nėra skaičių – negalima apskaičiuoti vidurkio.');
        return;
    }

    console.log('Skaičių gavo:', skaiciai.length);

    const suma = skaiciai.reduce((a, b) => a + b, 0);
    const rezultatas = suma / skaiciai.length;

    console.log('Suma:', suma);
    console.log('Vidurkis:', rezultatas);
}

// Kvietimai:
vidurkis(10, 20, 30);
vidurkis(5, 15);
vidurkis();

//....................

function didziausias(...skaiciai) {


console.log('gauti skaiciai', skaiciai);
console.log('kiekis:', skaiciai.length);

const max = Math.max(...skaiciai);
console.log('didziausias skaicius:', max);



}

didziausias(5, 9, 3, 100, 25);  // didžiausias: 100
didziausias(1);                 // didžiausias: 1
didziausias();                  // išveda: nėra skaičių

//.........................

const vidurinis = function(...skaiciai) {

    const suma = skaiciai.reduce((a, b) => a + b, 0);
    const rezas = (suma / skaiciai.length).toFixed(0);
    const rikiuote = skaiciai.sort((a, b) => a - b)

    console.log('visi skaiciai:', skaiciai);
    console.log(rikiuote);
    console.log('vidurkis', rezas);

}


vidurinis(5, 2, 9, 1, 4);    // [1, 2, 4, 5, 9] → vidurinis: 4
vidurinis(10, 20, 30, 40);   // [10, 20, 30, 40] → vidurinis: 25
vidurinis();                 // nėra skaičių


//.............................



const vaisiai = ["obuolys", "bananas", "kriaušė"];

vaisiai.forEach(function(elementas, indeksas, visasMasyvas) {
    console.log("Elementas:", elementas);
    console.log("Indeksas:", indeksas);
    console.log("Visas masyvas:", visasMasyvas);
});

// map()

const skaiciai = [10, 20, 30];

const padauginta = skaiciai.map(function(el, i, masyvas) {
    console.log("El:", el, "Indeksas:", i, "Visas masyvas:", masyvas);
    return el * 2;
});

// REDUCE()

const suma = skaiciai.reduce(function(suma, el, i, masyvas) {
    return suma + el;
}, 0);

console.log(suma);

// PRAKTIKA


const vardai = ["Jonas", "Asta", "Lina"];
// Užduotis:
// Išvesk į konsolę:
//  "2 vardas yra Lina"
//  "0 vardas yra Jonas" ir t.t.

vardai.forEach(function (el, i) {
    console.log(i + ' vardas yra: ' + el)
});

console.log('2 vardas yra: ' + vardai[2]);

//........................



const vardas = function(vardas, indeksas) {
if (indeksas < vardas.length) {
    console.log(indeksas + ' vardas yra: ' + vardas[indeksas]);
} else {
    console.log('Tokio vardo nėra');
}};


vardas(['Jonas', 'Asta', 'Lina'], 1);
vardas(['Jonas', 'Asta', 'Lina'], 5);




