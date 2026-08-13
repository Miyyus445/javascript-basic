/* Soal-04 */

const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const tanggal = new Date("2026-08-17");
const hari = tanggal.getDay(1);

console.log(`Hari: ${hari}`)
console.log(`Tanggal: ${tanggal.toDateString()}`)