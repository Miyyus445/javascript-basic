/* FINAL - Sistem Pemrosesan Data Produk */

const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

const namaProdukTrimmed = namaProduk.trim();
const namaProdukLowerCase = namaProdukTrimmed.toLowerCase();
const hargaProdukNumber = parseFloat(hargaProduk);
const kodeProdukUpperCase = kodeProduk.toUpperCase();

console.log(`===== Data Produk =====\n`);
console.log(`Nama Produk   : ${namaProdukLowerCase}`);
console.log(`Harga Produk  : ${hargaProdukNumber.toFixed(2)}`);
console.log(`Kode Produk   : ${kodeProdukUpperCase}`);
console.log(`\n========================`);