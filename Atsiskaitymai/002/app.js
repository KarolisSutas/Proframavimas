console.log('Atsiskaitymas 02');


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('1 uzd .............');

for (let i = 10; i > 0; i--) {
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

let ratas = 0
let masyvas = [];

for (let i = 10; i > 0; i--) {
    ratas++;
    console.log('ratas:', i);
    for (let j = 5; j > 0; j--) {
        let greitis = rand(20, 120);
        console.log('greitis posukyje:', greitis);
        masyvas.push(greitis);
    }
 

}
console.log(masyvas);








