
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
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

