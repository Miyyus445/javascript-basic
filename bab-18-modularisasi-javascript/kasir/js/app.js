/* App */

import { produk, cariProduk } from "./produk.js";
import formatRupiah, { hitungSubtotal, hitungTotal } from "./transaksi.js";

const listProdukContainer = document.querySelector("#daftar-produk-list");
const strukContainer = document.querySelector("#struk-transaksi");
const totalBiayaContainer = document.querySelector("#total-biaya");

function renderDaftarProduk() {
  listProdukContainer.innerHTML = "";

  produk.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "produk-item";
    li.innerHTML = `
      <span>${index + 1}. <strong>${item.nama}</strong></span>
      <span class="harga">${formatRupiah(item.harga)}</span>
    `;
    listProdukContainer.appendChild(li);
  });
}

function jalankanSimulasiTransaksi() {
  const keranjang = [
    { idProduk: 1, jumlah: 2 },
    { idProduk: 2, jumlah: 1 },
    { idProduk: 3, jumlah: 1 },
  ];

  const daftarStruk = [];

  strukContainer.innerHTML = "";

  keranjang.forEach((item) => {
    const dataProduk = cariProduk(item.idProduk);

    if (dataProduk) {
      const subtotal = hitungSubtotal(dataProduk.harga, item.jumlah);

      daftarStruk.push({
        nama: dataProduk.nama,
        harga: dataProduk.harga,
        jumlah: item.jumlah,
        subtotal: subtotal
      });

      const itemStruk = document.createElement("div");
      itemStruk.className = "struk-item";
      itemStruk.innerHTML = `
        <div class="struk-detail">
          <p><strong>${dataProduk.nama}</strong></p>
          <p class="sub-text">${formatRupiah(dataProduk.harga)} x ${item.jumlah}</p>
        </div>
        <!-- FIX 2: Manggil subtotal (huruf kecil) -->
        <div class="struk-subtotal">${formatRupiah(subtotal)}</div>
      `;

      strukContainer.appendChild(itemStruk);
    }
  });

  const grandTotal = hitungTotal(daftarStruk);
  totalBiayaContainer.textContent = formatRupiah(grandTotal);
}

renderDaftarProduk();
jalankanSimulasiTransaksi();