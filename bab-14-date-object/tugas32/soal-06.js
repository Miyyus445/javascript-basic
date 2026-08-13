/* Soal-06 */

const tanggal = new Date("2026-08-17");

function formatTanggal(date) {
  const tgl = String(date.getDate()).padStart(2, "0");
  const bln = String(date.getMonth() + 1).padStart(2, "0");
  const thn = date.getFullYear();
  return tgl + "/" + bln + "/" + thn;
}

console.log("Tanggal:", formatTanggal(tanggal));