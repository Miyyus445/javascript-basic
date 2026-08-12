/* Soal-13 */

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();


// jelaskan:
// Mengapa penghitungA dan penghitungB tidak menggunakan nilai hitungan yang sama?

// - karena beda variabel hitungan, beda juga closure. sehingga penghitungA dan penghitungB memiliki nilai hitungan yang berbeda.