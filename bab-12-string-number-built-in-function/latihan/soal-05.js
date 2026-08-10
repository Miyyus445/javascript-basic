/* Soal 5 */

const kalimat = "Saya sedang belajar JavaScript";

const cariPosisi = kalimat.indexOf("JavaScript");
if (cariPosisi !== -1) {
    console.log(`Kata "JavaScript" ditemukan pada posisi: ${cariPosisi}`);
} else {
    console.log('Kata "JavaScript" tidak ditemukan');
}