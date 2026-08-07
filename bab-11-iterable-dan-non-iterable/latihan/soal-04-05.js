/* Soal-04 */

const nilai = [90, 80, 85, 100, 95];
let total = 0;

for (let hitungNilai of nilai) {
    total += hitungNilai;
}

const hitungRataRata = total / nilai.length;
console.log("Total Nilai        :", total);
console.log("Rata-rata Nilai    :", hitungRataRata);