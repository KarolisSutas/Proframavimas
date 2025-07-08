console.log('Labas, Ūdra!');


// REGEX 
// [...] - regexe skliaustuose narsto po viena simboli
// [as]{3} - tikrina pasikartojima 3. kiek kartu turi pasikartoti skliaustai, eiles tvarka nesvarbi raidziu
// [0-9]{3} - nuo 0 iki 9 tures but 3 skaiciai 123 ar 654 ar 234. belekas.
// [0-9]{2,5} visi skaiciai nuo 2 iki 5 kartu. naturali busena paima maximaliai visus skaicius tarkim visus 4-2025
// [0-9]{2,5}? - po regexe ? jis ima minimaliai. reguliuoja kiek galima imti simboliu
// [a-z, ą, ę, č, ė, į, š, ų, ū, ž]{3}
// [0-9]? tai 0 arba 1
// [0-9]?? tai 0
// [0-9]+ - + nuo min iki begalybes.
// [0-9]* - * nuo 0 iki begalybes.
// [\D]{3} arba [\d]{3} - visi skaiciai
// [A-Z]{3}[0-9]{3}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// is teksto issizvejot skaiciu
const stringas = 'A'.repeat(rand(1, 11)) + rand(10, 200) + 'A'.repeat(rand(1, 11));
const regex = /[0-9]{3}/g;

const found = stringas.match(regex);

console.log(stringas);

if (null === found) {
    console.log('nieko neradau');
} else {
    console.log(+found[0]);
}
// REGEXO pabaiga

// Atspausdinti konsoleje po viena visas ne a raides tiek ne mazas tiek ne dideles

const str1 = 'Ananasas';

for (let i = 0; i < str1.length; i++) {
    
    // if ((str1[i] != 'a') && (str1[i] != 'A')) {
    //   console.log(str1[i]);
    // }
    if (str1[i].toLowerCase() != 'a') {
        console.log(str1[i]);
      }
  }

  // is stringo reikia padaryti kita stringa, kuriame nebutu a raidziu. Padarius toki stringa ji atspausdinti konsoleje
const str2 = 'Bananas';

let result2 = '';
let sum = 0;
for (let i = 0; i < str2.length; i++) {
    
    if (str2[i].toLowerCase() != 'a') {
        result2 = result2 + str2[i];
    } else sum++;
}

let result3 = '';

for (let i = 0; i < str2.length; i++) {
    if (str2[i].toLowerCase() == 'a') {
        result3 += '*';
    } else {
        result3 += str2[i];
    }
}

  
  console.log(result2);
  console.log(sum);
  console.log(result3);
  


  // suskaičiuoti kiek 'a' raidžių yra str2

  // Iš stringo reikia padaryti kitą stringą, kuriame vietoj 'a' raidžių būtų '*'. Padarius tokį stringą jį atspausdinti konsolėje