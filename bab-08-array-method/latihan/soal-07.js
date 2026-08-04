/* Soal-07 */

let antrian = [
  "Budi",
  "Ani",
  "Joko",
];

let dilayani = antrian.shift("Budi")
antrian.unshift("Dewi")

console.log(dilayani);
console.log(antrian);