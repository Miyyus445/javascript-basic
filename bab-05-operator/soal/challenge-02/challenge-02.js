/* Challenge-02 */

// Aquviva
const namaProduk1 = 'Aquviva'
const hargaAquviva = 3000
const jumlahBeliAquviva = 3

// Pocari Sweet
const namaProduk2 = 'Pocari Sweet'
const hargaPocariSweet = 8000
const jumlahBeliPocariSweet = 5

// Kupon Diskon
const kuponDiskon1 = 2500
const kuponDiskon2 = 5000

// Subtotal & Total Aquviva
let subtotalAquviva = hargaAquviva * jumlahBeliAquviva;
let totalAquviva = subtotalAquviva - kuponDiskon1;

// Subtotal & Total Pocari Sweet
let subtotalPocariSweet = hargaPocariSweet * jumlahBeliPocariSweet;
let totalPocariSweet = subtotalPocariSweet - kuponDiskon2;

// Total Semuanya
let totalSemua = totalAquviva;
totalSemua += totalPocariSweet;

// Perbandingan
let aquvivaLebihMurah = totalAquviva < totalPocariSweet;
let diskonPocariSweetLebihBesar = kuponDiskon2 >= kuponDiskon1;

// Logika
let lebihIritDanHemat = aquvivaLebihMurah && diskonPocariSweetLebihBesar;
let dapetBonus = (totalSemua > 50000) || aquvivaLebihMurah;


console.log(`======== NOTA PEMBELIAAN ========`);
console.log(`Subtotal Aquviva           : ${subtotalAquviva}`);
console.log(`Total Aquviva              : ${totalAquviva}`);
console.log(`Subtotal Pocari Sweet      : ${subtotalPocariSweet}`);
console.log(`Total Pocari Sweet         : ${totalPocariSweet}`);
console.log(`Total Semua                : ${totalSemua}`);
console.log(`----------------------------------`);
console.log(`Perbandingan Lebih Murah   : ${aquvivaLebihMurah}`);
console.log(`Perbandingan Lebih Besar   : ${diskonPocariSweetLebihBesar}`);
console.log(`Lebih Irit Dan Hemat       : ${lebihIritDanHemat}`);
console.log(`Dapet Bonus                : ${dapetBonus}`);
console.log(`======== NOTA PEMBELIAAN ========`);