/* Soal 14 - Challenge Continue */

const angka = [10, -5, 20, -8, 15, -1];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] < i) {
        continue
    }
    console.log(angka[i]);
}