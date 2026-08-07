/* Soal-13 - Challenge Biodata */

const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};

console.log("===== BIODATA =====");

for (let tampilkan in biodata){
    console.log(tampilkan + ": " + biodata[tampilkan]);
}

console.log("===================");