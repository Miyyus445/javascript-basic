/* Soal 4 */

const pesan = "Selamat datang di kelas JavaScript!";

const cekKata = pesan.endsWith("JavaScript!");
if (cekKata) {
    console.log("Pesan membahas JavaScript");
} else {
    console.log("Pesan tidak membahas JavaScript");
}

console.log(cekKata);