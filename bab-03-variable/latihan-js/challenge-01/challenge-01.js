/* Challenge-01 */

const struk = '========== STRUK ==========';
const produk = 'Mouse';
const hargaProduk = 165000;
const PAJAK_INDO = 0.12;

let jumlahDibeli = 2;
let totalSebelumPajak = hargaProduk + jumlahDibeli
let pajak = totalSebelumPajak * PAJAK_INDO
let totalAkhir = totalSebelumPajak + pajak

console.log(struk);
console.log(`Produk        : ${produk}`);
console.log(`Harga         : Rp.${hargaProduk}`);
console.log(`Jumlah Dibeli : ${jumlahDibeli}`);
console.log(`Subtotal      : Rp.${totalSebelumPajak}`);
console.log(`Pajak 12%     : Rp.${pajak}`);
console.log(`Total         : Rp.${totalAkhir}`);