/* Soal-02 */

const sekarang = new Date();

const tahun = sekarang.getFullYear();
const bulan = sekarang.getMonth() + 1;
const tanggal = sekarang.getDate();
const hari = sekarang.getDay();
const jam = sekarang.getHours();
const menit = sekarang.getMinutes();
const detik = sekarang.getSeconds();

console.log("Waktu Sekarang:");
console.log(`Tahun  : ${tahun}`);
console.log(`Bulan  : ${bulan}`);
console.log(`Tanggal: ${tanggal}`);
console.log(`Hari   : ${hari}`);
console.log(`Jam    : ${jam}`);
console.log(`Menit  : ${menit}`);
console.log(`Detik  : ${detik}`);