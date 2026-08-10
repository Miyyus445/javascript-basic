/* Study Case 2 - Sistem Struk Belanja */

const hargaBarang = "125000.50";
const jumlah = "3";

const hargaBarangNumber = parseFloat(hargaBarang);
const jumlahNumber = Number(jumlah);

const totalHarga = hargaBarangNumber * jumlahNumber;

console.log(`Harga Barang   : ${hargaBarangNumber.toFixed(2)}`);
console.log(`Jumlah         : ${jumlahNumber}`);
console.log(`Total Harga    : ${totalHarga.toFixed(2)}`);