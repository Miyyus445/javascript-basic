/* Soal-11 */

const angka = [10, 20, 30];

for (let item in angka) {
  console.log(item);
}

// Output

// 0
// 1
// 2

// Kenapa beda dari soal sebelumnya?
// karena for...of buat manggil isinya di array
// klo for...in buat manggil index nya yang ada di array