/* Final Challenge - Sistem Reminder Tugas */

const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date("2026-08-13");

const opsiFormat = { day: "numeric", month: "long", year: "numeric" };

console.log("===== DAFTAR TUGAS =====\n");

tugas.forEach((item, index) => {
  const objDeadline = new Date(item.deadline);

  const selisihMs = objDeadline.getTime() - sekarang.getTime();
  const msPerHari = 1000 * 60 * 60 * 24;
  const sisaHari = Math.ceil(selisihMs / msPerHari);

  const deadlineFormatted = objDeadline.toLocaleDateString("id-ID", opsiFormat);

  let status;
  if (selisihMs < 0) {
    status = "Deadline sudah terlewat.";
  } else if (sisaHari === 0) {
    status = "Hari ini!";
  } else {
    status = `${sisaHari} hari lagi`;
  }

  console.log(`${index + 1}. ${item.nama}`);
  console.log(`   Deadline: ${deadlineFormatted}`);
  console.log(`   Status  : ${status}\n`);
});