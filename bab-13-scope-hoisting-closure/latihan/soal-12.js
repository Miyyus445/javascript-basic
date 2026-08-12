/* Soal-12 */

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitung = buatPenghitung();

penghitung();
penghitung();
penghitung();


// 1. Di mana variabel hitungan dibuat?
//    - di function scope
// 2. Mengapa hitungan masih bisa digunakan setelah buatPenghitung() selesai?
//    - karena menggunakan closure
// 3. Fungsi mana yang mengingat hitungan?
//    - buatPenghitung