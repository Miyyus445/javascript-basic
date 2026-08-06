/* Soal-12 */

const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
  harga: 15000000,
};

for (const key in laptop) {
    console.log(key + " : " + laptop[key]);
}