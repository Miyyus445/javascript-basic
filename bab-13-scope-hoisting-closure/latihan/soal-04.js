/* Soal-04 */

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

// Tuliskan output secara berurutan.        - Dalam
//                                          - Luar
//                                          - Global

// Kemudian jelaskan mengapa setiap console.log() menghasilkan nilai yang berbeda.
//  - Setiap console.log() menghasilkan nilai yang berbeda karena adanya konsep scope dalam JavaScript.