/* Soal-07 */

console.log(nama); // Output: Undifiend

var nama = "Budi";

console.log(nama); // Output: Budi

//  jelaskan mengapa console.log() pertama tidak menghasilkan error.
// - karena variabel var dapat di hoisting, namun hanya deklarasinya saja — bukan nilainya. sehingga nilai variabelnya tetap undifiend hingga baris yang penugasannya dieksekusi.