/* Soal-14 */

let saldo = 150000;
let tarikTunai = 100000;

if (tarikTunai < saldo) {
    console.log('=== Penarikan Berhasil ===');
    console.log(`Sisa Saldo     : ${saldo - tarikTunai}`);
} else {
    console.log('Saldo Tidak Mencukupi');
}