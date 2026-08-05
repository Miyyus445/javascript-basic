/* Soal-14 - Challenge Akhir */

const hitungNilaiAkhir = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
}

const cekKelulusan = (nilai) => {
    if (nilai >= 75) {
        return 'Lulus'
    } else {
        return 'Tidak Lulus'
    }
}

const nilaiTugas = 80;
const nilaiUts = 75;
const nilaiUas = 85; 

const nilaiAkhir = hitungNilaiAkhir(nilaiTugas, nilaiUts, nilaiUas);
const status = cekKelulusan(nilaiAkhir);

console.log('Nilai Akhir    : ', nilaiAkhir);
console.log('Status         : ', status);