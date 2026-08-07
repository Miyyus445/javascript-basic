/* Bonus Challenge ⭐ */

const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};

console.log("==== DATA KELAS ====");
for (let dataKelas in kelas){
    console.log(dataKelas + ":", kelas[dataKelas]);
}
console.log("--------------------");

kelas.ruangan = "Lab Komputer";

console.log("==== DATA KELAS ====");
for (let dataKelas in kelas){
    console.log(dataKelas + ":", kelas[dataKelas]);
}
console.log("--------------------");