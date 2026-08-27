(function () {
    "use strict";

    // Elemen DOM
    const viewDaftar = document.querySelector("#view-daftar");
    const viewDetail = document.querySelector("#view-detail");
    const userCardContainer = document.querySelector("#user-card-container");
    const inputCari = document.querySelector("#input-cari");
    const btnTema = document.querySelector("#btn-tema");
    const notifikasiEl = document.querySelector("#notifikasi");
    const btnKembali = document.querySelector("#btn-kembali");
    const btnSalinEmail = document.querySelector("#btn-salin-email");

    const detailNama = document.querySelector("#detail-nama");
    const detailEmail = document.querySelector("#detail-email");
    const detailTelepon = document.querySelector("#detail-telepon");
    const detailWebsite = document.querySelector("#detail-website");
    const detailPerusahaan = document.querySelector("#detail-perusahaan");
    const detailAlamat = document.querySelector("#detail-alamat");

    let usersData = [];
    let favoritList = JSON.parse(localStorage.getItem("favoritUsers")) || [];
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

    async function muatDataUsers() {
        const cacheUsers = localStorage.getItem("usersData");
        if (cacheUsers) {
            usersData = JSON.parse(cacheUsers);
            renderUserCards(usersData);
        } else {
            notifikasiEl.textContent = "Memuat data...";
        }

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if (!response.ok) {
                throw new Error("Gagal mengambil data dari server.");
            }

            const freshData = await response.json();
            usersData = freshData;

            localStorage.setItem("usersData", JSON.stringify(freshData));
            notifikasiEl.textContent = "";

            renderUserCards(usersData);
        } catch (error) {
            if (!cacheUsers) {
                notifikasiEl.textContent = "⚠️ Terjadi kesalahan koneksi. Silakan periksa jaringan Anda.";
            }
        }
    }

    function renderUserCards(data) {
        userCardContainer.innerHTML = "";

        if (data.length === 0) {
            userCardContainer.innerHTML = "<p>Pengguna tidak ditemukan.</p>";
            return;
        }

        data.forEach((user) => {
            const isFav = favoritList.includes(user.id);

            const card = document.createElement("div");
            card.className = "user-card";

            card.innerHTML = `
                <div class="user-card-header">
                    <span class="user-name">${user.name}</span>
                    <button class="btn-fav">${isFav ? "★" : "☆"}</button>
                </div>
                <p class="user-email">✉️ ${user.email}</p>
                <p class="user-company">🏢 ${user.company.name}</p>
            `;

            card.addEventListener("click", (e) => {
                // Biar kalau nge-klik tombol favorit gak ikut ngebuka detail
                if (e.target.classList.contains("btn-fav")) return;
                tampilkanDetailUser(user.id, true);
            });

            const btnFav = card.querySelector(".btn-fav");
            btnFav.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleFavorit(user.id);
            });

            userCardContainer.appendChild(card);
        });
    }

    function toggleFavorit(userId) {
        if (favoritList.includes(userId)) {
            favoritList = favoritList.filter((id) => id !== userId);
        } else {
            favoritList.push(userId);
        }
        localStorage.setItem("favoritUsers", JSON.stringify(favoritList));

        const keyword = inputCari.value.toLowerCase().trim();
        const hasilFilter = usersData.filter((u) => u.name.toLowerCase().includes(keyword));
        renderUserCards(hasilFilter);
    }

    inputCari.addEventListener("input", () => {
        const keyword = inputCari.value.toLowerCase().trim();
        const hasilFilter = usersData.filter((user) =>
            user.name.toLowerCase().includes(keyword)
        );
        renderUserCards(hasilFilter);
    });

    function tampilkanDetailUser(userId, pushState = true) {
        const user = usersData.find((u) => u.id === userId);
        if (!user) return;

        detailNama.textContent = user.name;
        detailEmail.textContent = user.email;
        detailTelepon.textContent = user.phone;
        detailWebsite.textContent = user.website;
        detailPerusahaan.textContent = user.company.name;
        detailAlamat.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})`;

        btnSalinEmail.onclick = async () => {
            await navigator.clipboard.writeText(user.email);
            alert("Email berhasil disalin ke clipboard!");
        };

        viewDaftar.style.display = "none";
        viewDetail.style.display = "block";

        if (pushState) {
            history.pushState({ page: "detail", id: userId }, "", `/user/${userId}`);
        }
    }

    function tampilkanDaftarUser(pushState = true) {
        viewDetail.style.display = "none";
        viewDaftar.style.display = "block";

        if (pushState) {
            history.pushState({ page: "daftar" }, "", "/");
        }
    }

    btnKembali.addEventListener("click", () => tampilkanDaftarUser(true));

    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.page === "detail" && e.state.id) {
            tampilkanDetailUser(e.state.id, false);
        } else {
            tampilkanDaftarUser(false);
        }
    });

    terapkanTema(temaSaatIni);
    muatDataUsers();

})();