/* Soal-05 */

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const bulan = namaBulan[7];
const tanggal = new Date("2026-08-17");

console.log(`Tanggal: ${tanggal.getDate()} ${bulan} ${tanggal.getFullYear()}`);