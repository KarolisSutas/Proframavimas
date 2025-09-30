// Unit testavimo užduotys su Vitest
 
// Žemiau pateiktos funkcijos skirtos praktikuotis vienetinių testų rašyme.  
// Kiekvienai funkcijai parašyk bent 2–3 testus su Vitest , patikrindamas teisingus ir neteisingus scenarijus.
 
// 1. Sudėtis
export function add(a, b) {
    return a + b;
}
 
// Užduotis:
// - Patikrink, ar`add(2, 3)` grąžina`5`.  
// - Patikrink, ar`add(-1, 1)` grąžina`0`.
 
// 2. Skaičiaus lyginis tikrinimas
export function isEven(n) {
    return n % 2 === 0;
}
 
// Užduotis:
// - Patikrink, ar`isEven(4)` yra`true`.  
// - Patikrink, ar`isEven(5)` yra`false`.
 
// 3. Didžiausio skaičiaus radimas
export function max(a, b) {
    return a > b ? a : b;
}
 
// Užduotis:
// - Patikrink, ar`max(10, 7)` grąžina`10`.  
// - Patikrink, ar`max(3, 9)` grąžina`9`.
 
// 4. Teksto ilgis
export function stringLength(str) {
    return str.length;
}
 
// Užduotis:
// - Patikrink, ar`stringLength("test")` yra`4`.  
// - Patikrink, ar`stringLength("")` yra`0`.
 
// 5. Masės konvertavimas į kilogramus
export function gramsToKg(grams) {
    return grams / 1000;
}
 
// Užduotis:
// - Patikrink, ar`gramsToKg(2000)` yra`2`.  
// - Patikrink, ar`gramsToKg(0)` yra`0`.
 
// 6. Pirmoji masyvo reikšmė
export function firstElement(arr) {
    return arr[0];
}