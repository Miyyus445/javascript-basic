const santri = {
    nama: "Budi Santoso",
    kelas: "XI RPL",
    status: "Aktif"
};

const aktivitas = [
    "Login ke aplikasi",
    "Membaca materi JavaScript",
    "Mengerjakan latihan",
    "Mengumpulkan tugas"
];

const namaEl = document.querySelector("#nama");
const kelasEl = document.querySelector("#kelas");
const statusEl = document.querySelector("#status");

namaEl.textContent = santri.nama;
kelasEl.textContent = santri.kelas;
statusEl.textContent = santri.status;

const aktivitasEl = document.querySelector(".aktivitas");
aktivitas.forEach(teks => {
    const liBaru = document.createElement("li");
    liBaru.textContent = teks + "";

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";

    btnHapus.addEventListener("click", () => {
        liBaru.remove();
    });

    liBaru.appendChild(btnHapus);

    aktivitasEl.appendChild(liBaru);
});