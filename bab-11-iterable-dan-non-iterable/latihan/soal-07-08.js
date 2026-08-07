/* Soal-07 */

const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
};

for (let toko in laptop) {
    //menampilkan properti
    console.log(toko);
    //menampilkan value/nilai
    console.log(laptop[toko]);
}