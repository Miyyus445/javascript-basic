/* Soal-15 - Challenge Nilai Tertinggi */

const nilai = [75, 90, 88, 100, 67, 95];

let nilaiTertinggi = nilai[0];

for (let n of nilai) {
    if (n > nilaiTertinggi) {
        nilaiTertinggi = n;
    }
}

console.log("Nilai Tertinggi:", nilaiTertinggi);