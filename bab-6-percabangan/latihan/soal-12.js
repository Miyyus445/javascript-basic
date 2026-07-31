/* Soal-12 */

let totalBelanja = 320000;

if (totalBelanja >= 500000) {
    console.log('Diskon     : 20%');
    console.log(`Potongan   : Rp.${(totalBelanja * 20) / 100}`);
    console.log(`Total      : Rp.${totalBelanja - (totalBelanja * 20) / 100}`);
} else if (totalBelanja >= 250000) {
    console.log('Diskon     : 10%');
    console.log(`Potongan   : Rp.${(totalBelanja * 10) / 100}`);
    console.log(`Total      : Rp.${totalBelanja - (totalBelanja * 10) / 100}`);
} else {
    console.log('Tidak ada diskon');
}
