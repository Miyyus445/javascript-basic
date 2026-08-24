/* Transaksi */

// format rupiah
export default function formatRupiah(harga) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0 
    }).format(harga);
}

// hitung subtotal
export function hitungSubtotal(harga, jumlah) {
    return harga * jumlah;
}

// hitung total
export function hitungTotal(daftarTransaksi) {
    return daftarTransaksi.reduce((total, item) => total + item.subtotal, 0);
}