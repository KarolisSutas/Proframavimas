console.log('Atsiskaitymas 02');


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('1 uzd .............');

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('2 uzd .............');

    let suma = 0;
    let vidutinis;

for (let i = 10; i > 0; i--) {

    let auto55 = rand(120, 220);
    suma += auto55;
    vidutinis = suma / 10;

    console.log(auto55);

}

console.log('vidutinis greitis:', vidutinis);

console.log('3 uzd .............');

let masina55 = 44;

for (let i = 10; i > 0; i--) {

    let benzas = rand(3, 6);
    masina55 -= benzas;

    if (masina55 > 0) {
        console.log(masina55);
    } else if (masina55 <= 0) {
        console.log('STOP');
        break;
    }
}

    const finisas = masina55;
    if (finisas > 0) {
        console.log('pavyko');
    }



console.log('4 uzd .............');

let minSpeed = Infinity;
for (let lap = 0; lap < 10; lap++) {
    for (let turn = 0; turn < 5; turn++) {
        const speed = rand(20, 120);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
        console.log(`Ratas ${lap + 1}, Posūkis ${turn + 1}: Greitis ${speed} km/h`);
    }
}
console.log(`Mažiausias greitis posūkiuose: ${minSpeed} km/h`);

console.log('5 uzd .............');

let kilometers = 0;
let kangaroo, steer, brakes;
do {
    kangaroo = rand(0, 1);
    steer = rand(0, 1);
    brakes = rand(0, 1);
    kilometers++;
} while (kangaroo != 1 || steer != 0 || brakes != 0);
 
console.log(`Automobilis Nr. 55 sugebėjo nuvažiuoti ${kilometers} kilometrų be avarijos.`);
console.log(`Paskutinis įvykis: kengūra iššoko: ${kangaroo}, vairuotojas nespėjo pasukti vairo: ${steer}, vairuotojas nespėjo paspausti stabdžių: ${brakes}`);











