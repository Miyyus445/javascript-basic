/* Transaksi */

// Format Rupiah (Default Export)
export default function formatRupiah(harga) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(harga);
}

// Hitung Subtotal
export function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}

// Hitung Total
export function hitungTotal(daftarTransaksi) {
  return daftarTransaksi.reduce((total, item) => total + item.subtotal, 0);
}