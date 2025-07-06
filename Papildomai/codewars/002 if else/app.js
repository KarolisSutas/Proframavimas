console.log('If else uzd');

// function checkAlive (health) {
//     if (health > 0) {
//       return true
//     } else {
//       return false
//     }
//   }

// random
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let health = rand(-10, 10);
let checkAlive = (health > 0) ? true : false;

 console.log(checkAlive);
 

 function saleHotdogs(n){
    if (n < 5) {
      return n * 100;
    } else if (n >= 5 && n < 10) {
      return n * 95;
    } else return n * 90;
  }

  console.log(saleHotdogs(9));

  console.log('.....lyginis/nelyginis...............')


let skaicius1;
let skaicius2;
saugiklis = 88;

do {
  if (--saugiklis == 0) {
    console.log('BUM');
    break;
}   

    skaicius1 = (rand(10, 50) % 2 == 0) ? 'even' : 'odd';
    skaicius2 = (rand(10, 50) % 2 == 0) ? 'even' : 'odd';
    console.log(skaicius1, skaicius2);

} while (skaicius1 != 'odd' || skaicius2 != 'odd');

console.log('.....Amžiaus patikrinimas...............')

let asmuo = rand(0, 99);

if (asmuo < 13) {
  console.log('vaikas:', asmuo, 'm.');
} else if (asmuo > 13 && asmuo <= 17) {
  console.log('paauglys:', asmuo, 'm.');
} else {
  console.log('suages:', asmuo, 'm.');
}

console.log('.....Amžiaus patikrinimas...............')

let A = 31;
let B = 7;

if (A > B) {
  console.log('A:', A);
} else if (A < B) {
  console.log('B:', B);
} else {
  console.log('abu lygus');
}

    