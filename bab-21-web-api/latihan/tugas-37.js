(function () {
    "use strict";

    // Data Default
    const santriDefault = {
        nama: "Budi Santoso",
        kelas: "XI RPL",
        status: "Aktif"
    };

    const aktivitasDefault = [
        "Login ke aplikasi",
        "Membaca materi JavaScript",
        "Mengerjakan latihan",
        "Mengumpulkan tugas"
    ];

    // Elemen DOM
    const namaEl = document.querySelector("#nama");
    const kelasEl = document.querySelector("#kelas");
    const statusEl = document.querySelector("#status");
    const aktivitasEl = document.querySelector(".aktivitas");

    const viewDaftar = document.querySelector("#view-daftar");
    const viewDetail = document.querySelector("#view-detail");
    const inputCari = document.querySelector("#input-cari");
    const btnTema = document.querySelector("#btn-tema");
    const notifikasiEl = document.querySelector("#notifikasi");
    const btnKembali = document.querySelector("#btn-kembali");
    const btnSalin = document.querySelector("#btn-salin");

    const detailNama = document.querySelector("#detail-nama");
    const detailSantri = document.querySelector("#detail-santri");
    const detailWaktu = document.querySelector("#detail-waktu");

    let daftarAktivitas = [];
    let favoritList = JSON.parse(localStorage.getItem("favoritAktivitas")) || [];
    let temaSaatIni = localStorage.getItem("temaSantri") || "terang";

    function terapkanTema(tema) {
        if (tema === "gelap") {
            document.body.classList.add("dark-mode");
            btnTema.textContent = "☀️ Mode Terang";
        } else {
            document.body.classList.remove("dark-mode");
            btnTema.textContent = "🌙 Mode Gelap";
        }
        localStorage.setItem("temaSantri", tema);
        temaSaatIni = tema;
    }

    btnTema.addEventListener("click", () => {
        terapkanTema(temaSaatIni === "terang" ? "gelap" : "terang");
    });

    function panggilDataServer() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    santri: santriDefault,
                    aktivitas: aktivitasDefault
                });
            }, 800);
        });
    }

    async function muatDataDashboard() {
        const cacheAktivitas = localStorage.getItem("aktivitasCache");
        if (cacheAktivitas) {
            daftarAktivitas = JSON.parse(cacheAktivitas);
            renderDashboard(santriDefault, daftarAktivitas);
        } else {
            notifikasiEl.textContent = "Memuat data santri...";
        }

        try {
            const res = await panggilDataServer();
            daftarAktivitas = res.aktivitas;

            localStorage.setItem("aktivitasCache", JSON.stringify(res.aktivitas));
            notifikasiEl.textContent = "";

            renderDashboard(res.santri, daftarAktivitas);
        } catch (error) {
            notifikasiEl.textContent = "Gagal memuat data!";
        }
    }

    function renderDashboard(dataSantri, listAktivitas) {
        namaEl.textContent = dataSantri.nama;
        kelasEl.textContent = dataSantri.kelas;
        statusEl.textContent = dataSantri.status;

        renderAktivitasList(listAktivitas);
    }

    function renderAktivitasList(list) {
        aktivitasEl.innerHTML = "";

        if (list.length === 0) {
            aktivitasEl.innerHTML = "<li>Aktivitas tidak ditemukan</li>";
            return;
        }

        list.forEach((teks, index) => {
            const liBaru = document.createElement("li");

            const isFav = favoritList.includes(teks);
            const spanTeks = document.createElement("span");
            spanTeks.textContent = `${isFav ? "★ " : ""}${teks}`;
            spanTeks.style.cursor = "pointer";

            spanTeks.addEventListener("click", () => {
                tampilkanDetail(teks, index, true);
            });

            const actionGroup = document.createElement("div");

            const btnFav = document.createElement("button");
            btnFav.textContent = isFav ? "Batal ★" : "★";
            btnFav.style.backgroundColor = isFav ? "#f39c12" : "#3498db";
            btnFav.style.marginRight = "6px";

            btnFav.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFavorit(teks);
            });

            const btnHapus = document.createElement("button");
            btnHapus.textContent = "Hapus";
            btnHapus.addEventListener("click", (e) => {
                e.stopPropagation();
                daftarAktivitas.splice(index, 1);
                localStorage.setItem("aktivitasCache", JSON.stringify(daftarAktivitas));
                renderAktivitasList(daftarAktivitas);
            });

            actionGroup.appendChild(btnFav);
            actionGroup.appendChild(btnHapus);

            liBaru.appendChild(spanTeks);
            liBaru.appendChild(actionGroup);

            aktivitasEl.appendChild(liBaru);
        });
    }

    function toggleFavorit(teks) {
        if (favoritList.includes(teks)) {
            favoritList = favoritList.filter((item) => item !== teks);
        } else {
            favoritList.push(teks);
        }
        localStorage.setItem("favoritAktivitas", JSON.stringify(favoritList));
        renderAktivitasList(daftarAktivitas);
    }

    inputCari.addEventListener("input", () => {
        const keyword = inputCari.value.toLowerCase().trim();
        const hasilFilter = daftarAktivitas.filter((item) =>
            item.toLowerCase().includes(keyword)
        );
        renderAktivitasList(hasilFilter);
    });

    function tampilkanDetail(teks, id, pushState = true) {
        detailNama.textContent = teks;
        detailSantri.textContent = santriDefault.nama + " (" + santriDefault.kelas + ")";
        detailWaktu.textContent = new Date().toLocaleDateString("id-ID");

        btnSalin.onclick = async () => {
            await navigator.clipboard.writeText(`${teks} - ${santriDefault.nama}`);
            alert("Info aktivitas berhasil disalin!");
        };

        viewDaftar.style.display = "none";
        viewDetail.style.display = "block";

        if (pushState) {
            history.pushState({ page: "detail", id: id }, "", `/aktivitas/${id}`);
        }
    }

    function tampilkanDaftar(pushState = true) {
        viewDetail.style.display = "none";
        viewDaftar.style.display = "block";

        if (pushState) {
            history.pushState({ page: "daftar" }, "", "/");
        }
    }

    btnKembali.addEventListener("click", () => tampilkanDaftar(true));

    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.page === "detail" && e.state.id !== undefined) {
            const teks = daftarAktivitas[e.state.id];
            if (teks) {
                tampilkanDetail(teks, e.state.id, false);
            } else {
                tampilkanDaftar(false);
            }
        } else {
            tampilkanDaftar(false);
        }
    });

    terapkanTema(temaSaatIni);
    muatDataDashboard();

})();