/* Challenge - Sistem Nilai Siswa */

const nilai = [80, 90, 75, 95, 85];

function prosesNilai(...nilai){
    const nilaiTertinggi = Math.max(...nilai);
    const nilaiTerendah = Math.min(...nilai);

    const total = nilai.reduce((acc, curr) => acc + curr, 0);

    return {
        nilaiTertinggi,
        nilaiTerendah,
        total
    }
    
};

const hasil = prosesNilai(80, 90, 75, 95, 85);

const {nilaiTertinggi, nilaiTerendah, total} = hasil;

console.log(`Nilai Tertinggi : ${nilaiTertinggi}`);
console.log(`Nilai Terendah  : ${nilaiTerendah}`);
console.log(`Total Nilai     : ${total}`);