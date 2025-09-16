// 1) Booleans(kino salė)
let isPlaceTaken = true;     // ar vieta laisva?
let isPaymentAproved = false;    // ar apmokėjimas patvirtintas?
let isMessageOn = true;     // ar pranešimai įjungti?
 
// 2) Tekstas ir skaičiai(biblioteka)
let isbnNumber = '9783161484100'; // ISBN
let expireDays = 14;              // laikymo dienos
let author = 'H. Murakami';   // autorius
 
// 3) Loginės tikrinimo funkcijos(kvotos)
function hasOverLimit(used, limit) { }
function isExpireDate(date) { }
function canSendRequest(hours) { }
// 1) ar viršyta kvota? 2) ar terminas praėjęs? 3) ar galima naktinė užklausa?
 
// 4) Veiksmo funkcijos(el.laiškai)
function createCompany() { } // A: sukurti naują kampaniją,
function sendTestEmail() { } // B: išsiųsti bandomąjį laišką,
function archiveCompany() { } // C: archyvuoti kampaniją
 
// 5) Klasės(IoT sensoriai)
class temperatureReading { }   // temperatūros matavimas
class HumidityReading { }   // drėgmės matavimas
class stationConfig { }   // bendra stoties konfigūracija
 
// 6) If sąlyga(parkavimas)
let valid = true; // ar leidimas galioja?
if (valid) {
    // įleisti automobilį
}
 
// 7) Bendriniai pavadinimai -> konkretūs(oras)
let hourlyCelciusData = [18.3, 19.1, 21.0]; // Duomenys – valandinės temperatūros;
let systemState = 'ok'; // str – sistemos būsena;
function getDailySummary() { //funkcija – dienos santraukos skaičiavimas.
    // ...
}
 
// 8) Formos laukai(registracija į renginį)
let participant = 'Greta'; // vardas
let participantEmail= 'greta@example.com'; // el. paštas
let sessionDateTime = '2025-10-12 19:00'; // pasirinktas seansas
 
// 9) Nuoseklumas(vienodas veiksmažodis)
function renderFilms() { }
function rendRooms() { }
function renderScreenings() { }
 
// 10) Pernelyg panašūs pavadinimai(ataskaitos). Aiškiai atribok tikslą / formatą / laikotarpį.
reports.getDailySummaryForDate(d);
reports.getTodaySummary(d);
reports.parseDailySummary(d);
reports.getRawDailySnapshot(d);
 
// 11) Slengas ir sutrumpinimai(moderavimas)
let confirmationMessage = 'aišku'; // omg – statusas;
function legWarning(msg) { } // lol – registruoti perspėjimą
 
// 12) Datos / žymos pavadinimai(logai)
let currentDate = new Date();
let isoTimestamp = currentDate.toISOString(); // ISO žyma
 
// 13) Sąrašas vs.žemėlapis(muzikos grojaraštis)
let songMap = { '1': 'Intro', '2': 'Skyline' }; // ID -> pavadinimas
let playlist = ['Intro', 'Skyline', 'Dawn'];      // eilės tvarka
 
// 14) Perteklinės detalės(finansai)
let portfolio = ['AAPL', 'MSFT'];
let transaction = { amount: 120, date: '2025-09-01' };
 
// 15) Sudėtinis objektas(siunta)
let shipment  = {
     trackNumber: 'BX-4421',      // siuntos numeris
     weight: 2.7,            // svoris kg
     receiverPostalCode: 'LT-01100',   // gavėjo pašto kodas
}
