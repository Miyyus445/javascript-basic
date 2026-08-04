/* Soal-13 - Challenge Daftar Belanja*/

let belanja = [];

belanja.push('Beras', 'Minyak', 'Gula')
belanja.splice(2, 1, 'Telur')
belanja.unshift('Tepung')

let totalBarang = belanja.length;

console.log(belanja);
console.log(totalBarang);