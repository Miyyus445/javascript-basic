/* Study Case 02 - Sistem Jatuh Tempo Pembayaran */

const tanggalTransaksi = new Date("2026-08-13");
const jatuhTempo = new Date(tanggalTransaksi);
jatuhTempo.setDate(20);

const opsi = { day: "numeric", month: "long", year: "numeric" };

console.log(`Tanggal Transaksi : ${tanggalTransaksi.toLocaleDateString("id-ID", opsi)}`);
console.log(`Jatuh Tempo       : ${jatuhTempo.toLocaleDateString("id-ID", opsi)}`);