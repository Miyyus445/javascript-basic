/* Soal-09 */

const tanggal = new Date(2026, 0, 1);

console.log(tanggal.getMonth()); // 0
console.log(tanggal.getDate()); // 1
console.log(tanggal.getFullYear()); // 2026

// jelaskan mengapa getMonth() menghasilkan nilai tersebut!
// - Karena bulan dalam objek Date dimulai dari 0 (Januari) hingga 11 (Desember)