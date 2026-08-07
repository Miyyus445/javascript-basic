/* Soal-06 */

const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XI RPL",
};

for (let kelas in siswa) {
    console.log(kelas + " :", siswa[kelas]);
}