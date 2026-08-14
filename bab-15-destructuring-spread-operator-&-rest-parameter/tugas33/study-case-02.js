/* Study Case 02 */

const keranjangA = [
  "Keyboard",
  "Mouse",
];

const keranjangB = [
  "Monitor",
  "Headset",
];

const allKeranjang = [...keranjangA, ...keranjangB];

const [pertama, kedua, , terakhir] = allKeranjang;

console.log(`Produk Pertama  : ${pertama}`);
console.log(`Produk Kedua    : ${kedua}`);
console.log(`Produk Terakhir : ${terakhir}`);