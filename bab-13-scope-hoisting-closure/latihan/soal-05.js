/* Soal-05 */

const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));

// Jawab:

// 1. Di mana pajak dibuat?
// - pajak dibuat dengan global scope
// 2. Di mana totalPajak dibuat?
// - totalPajak dibuat dengan function scope
// 3. Mengapa hitungHarga() dapat menggunakan pajak?
// - karena variabel pajak dibuat dengan global scope, jadi bisa diakses dari dalam function
// 4. Apakah totalPajak dapat digunakan di luar fungsi?
// - tidak