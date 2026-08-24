/* Data Produk */

// named export
export const produk = [
  {
    id: 1,
    nama: "Keyboard",
    harga: 250000,
  },
  {
    id: 2,
    nama: "Mouse",
    harga: 150000,
  },
  {
    id: 3,
    nama: "Headset",
    harga: 300000,
  },
];

export function cariProduk(id) {
    return produk.find((item) => item.id === id);
};