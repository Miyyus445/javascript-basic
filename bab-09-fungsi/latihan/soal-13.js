/* Soal-13 - Challenge Menghitung Total Belanja */

const hitungSubTotal = (harga, jumlah) => harga * jumlah;
const hitungPPN = (subtotal) => (subtotal * 11) / 100;
const hitungTotal = (subtotal, ppn) => subtotal + ppn;

const harga = 25000;
const jumlah = 4;

const subtotal = hitungSubTotal(harga, jumlah);
const ppn = hitungPPN(subtotal);
const total = hitungTotal(subtotal, ppn);

console.log('Subtotal : Rp', subtotal);
console.log('PPN 11%  : Rp', ppn);
console.log('Total    : Rp', total);