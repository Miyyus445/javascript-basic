/* Soal-08 */

let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk = sudahLogin || sudahVerifikasi; 
let dapatFiturPremium = premium || sudahVerifikasi;

console.log(bolehMasuk);
console.log(dapatFiturPremium);