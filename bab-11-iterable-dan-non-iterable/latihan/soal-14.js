/* Soal-14 - Challenge Daftar Belanja */

const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun",
];

let nomor = 1;

for (let belanja of daftarBelanja){
    console.log(nomor + ". " + belanja);
    nomor++;
}