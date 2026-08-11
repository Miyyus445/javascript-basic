/* Soal-10 */

// Prediksi output program berikut tanpa menjalankannya:

console.log(a);
var a = 10;

console.log(b);
let b = 20;

// Apakah kedua console.log() berhasil dijalankan?
// - Hanya console.log(a) yang berhasil dijalankan, sedangkan console.log(b) menghasilkan error.

// Jelaskan.
// - karena console.log(a) menggunankan var yang dapat di hoisting, sedangkan console.log(b) menggunakan let yang tidak dapat di hoisting.