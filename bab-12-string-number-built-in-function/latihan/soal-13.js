/* Soal 13 */

console.log(Number("42px")); // Output: NaN
console.log(parseInt("42px")); // Output: 42

// Karena "42px" di Number bukan murni angka, sehingga menghasilkan NaN. Tidak bisa di konversi menjadi angka.
// Sedangkan "42px" di parseInt mengabaikan karakter di belakang angka, sehingga menghasilkan 42.