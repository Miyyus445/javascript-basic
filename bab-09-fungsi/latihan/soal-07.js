/* Soal-07 */

function cekKelulusan (nilai) {
    if (nilai >= 75) {
        return 'Lulus';
    } else if (nilai < 75) {
        return 'Tidak Lulus';
    } else {
        return 'Data Tidak ditemukan';
    } 
}

console.log(cekKelulusan(89));
console.log(cekKelulusan(70));
console.log(cekKelulusan('budi'));