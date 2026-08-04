/* Soal-14 - Challenge Sistem Antrian */

let antrian = [];

antrian.push('Budi')
antrian.push('Ani')
antrian.push('Citra')
antrian.shift('Budi')
antrian.push('Dedi')
antrian.unshift('Eka')

console.log('=== Daftar Antrian ===');

for (let i = 0; i < antrian.length; i++) {
    console.log((i + 1) + '. ' + antrian[i]);
}