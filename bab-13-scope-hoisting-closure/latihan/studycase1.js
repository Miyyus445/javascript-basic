/* Study Case 1 - Sistem Keranjang Belanja */

function buatKeranjang() {
  let items = [];

  return {
    tambah(nama, harga) {
      items.push({ nama, harga });
    },

    hapus(nama) {
      const index = items.findIndex((item) => item.nama === nama);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${nama} berhasil dihapus.\n`);
      } else {
        console.log(`${nama} tidak ditemukan di keranjang.\n`);
      }
    },

    lihatKeranjang() {
      console.log("===== KERANJANG =====");
      if (items.length === 0) {
        console.log("Keranjang kosong.");
      } else {
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
        });
      }
      console.log("");
    },

    hitungTotal() {
      const total = items.reduce((acc, item) => acc + item.harga, 0);
      return total;
    },

    jumlahItem() {
      return items.length;
    }
  };
}

const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

console.log("Jumlah item:", keranjang.jumlahItem());
console.log("Total belanja:", "Rp" + keranjang.hitungTotal());

console.log(keranjang.items); 