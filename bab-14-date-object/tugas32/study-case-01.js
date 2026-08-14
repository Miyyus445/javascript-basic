/* Study Case 1 - Sistem Deadline Tugas */

const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const selisihMs = deadline.getTime() - sekarang.getTime();

const msPerHari = 1000 * 60 * 60 * 24;
const sisaHari = Math.ceil(selisihMs / msPerHari);

const opsiFormat = { day: "numeric", month: "long", year: "numeric" };
const deadlineFormatted = deadline.toLocaleDateString("id-ID", opsiFormat);

console.log(`Deadline: ${deadlineFormatted}`);

if (selisihMs < 0) {
  console.log("Deadline sudah terlewat.");
} else {
  console.log(`Sisa waktu: ${sisaHari} hari lagi`);
}