/* Final Challenge - Sistem Manajemen Tim */

const timFrontend = [
  "Budi",
  "Andi",
  "Citra",
];

const timBackend = [
  "Doni",
  "Eko",
];

const seluruhTim = [...timFrontend, ...timBackend, "Fajar"];

function tampilkanTim(namaTim, ...anggota) {
  const [ketua, wakil] = anggota;

  console.log("=============================");
  console.log(`      ${namaTim.toUpperCase()}      `);
  console.log("=============================\n");

  anggota.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
  });
}

tampilkanTim("Developer Team", ...seluruhTim);