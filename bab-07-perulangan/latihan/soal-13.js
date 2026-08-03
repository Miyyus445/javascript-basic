/* Soal 13 - Challenge Data Nilai */

const nilai = [80, 95, 60, 75, 100];
let totalNilai = 0;

for (let i = 0; i < nilai.length; i++) {
    totalNilai += nilai[i]
}

let rataRata = totalNilai / nilai.length;

console.log(`Total Nilai        : ${totalNilai}`);
console.log(`Rata-rata Nilai    : ${rataRata}`);