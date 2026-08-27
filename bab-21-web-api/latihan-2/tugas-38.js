(function () {
    "use strict";

    // API URLs
    const USER_API = "https://jsonplaceholder.typicode.com/users";
    const ARTICLE_API = "https://jsonplaceholder.typicode.com/posts";

    // ELEMEN DOM - USER DASHBOARD
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

    // ELEMEN DOM - BLOG ARTIKEL
    const blogSection = document.querySelector("#blog-section");
    const articleForm = document.querySelector("#article-form");
    const articleIdInput = document.querySelector("#article-id");
    const articleTitleInput = document.querySelector("#article-title");
    const articleBodyInput = document.querySelector("#article-body");
    const btnSubmitArticle = document.querySelector("#btn-submit-article");
    const btnCancelArticle = document.querySelector("#btn-cancel-article");
    const inputCariArticle = document.querySelector("#input-cari-article");
    const notifArticle = document.querySelector("#notif-article");
    const articleListContainer = document.querySelector("#article-list-container");

    let usersData = [];
    let articlesData = [];
    let isEditingArticle = false;
    let editArticleId = null;

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
            const response = await fetch(USER_API);
            if (!response.ok) throw new Error("Gagal mengambil data dari server.");

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
        blogSection.style.display = "none";
        viewDetail.style.display = "block";

        if (pushState) {
            history.pushState({ page: "detail", id: userId }, "", `/user/${userId}`);
        }
    }

    function tampilkanDaftarUser(pushState = true) {
        viewDetail.style.display = "none";
        viewDaftar.style.display = "block";
        blogSection.style.display = "block";

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

    async function muatDataArtikel() {
        notifArticle.textContent = "Loading articles...";
        try {
            const res = await fetch(`${ARTICLE_API}?_limit=6`);
            if (!res.ok) throw new Error("Gagal mengambil artikel.");

            articlesData = await res.json();
            notifArticle.textContent = "";
            renderDaftarArtikel(articlesData);
        } catch (error) {
            notifArticle.textContent = "Gagal mengambil data artikel. Silakan coba lagi.";
        }
    }

    function renderDaftarArtikel(list) {
        articleListContainer.innerHTML = "";

        if (list.length === 0) {
            articleListContainer.innerHTML = "<p>Belum ada artikel.</p>";
            return;
        }

        list.forEach((art) => {
            const card = document.createElement("div");
            card.className = "user-card article-card-item";

            card.innerHTML = `
                <div class="user-card-header">
                    <span class="user-name">#${art.id} ${escapeHTML(art.title)}</span>
                </div>
                <p class="user-email" style="margin-top: 6px;">${escapeHTML(art.body)}</p>
                <div class="article-action-buttons">
                    <button class="btn-action-art btn-edit-art">✏️ Edit</button>
                    <button class="btn-action-art btn-delete-art">🗑️ Delete</button>
                </div>
            `;

            card.querySelector(".btn-edit-art").addEventListener("click", () => setupEditArtikel(art.id));
            card.querySelector(".btn-delete-art").addEventListener("click", () => hapusArtikel(art.id));

            articleListContainer.appendChild(card);
        });
    }

    async function tambahArtikel(title, body) {
        btnSubmitArticle.disabled = true;
        btnSubmitArticle.textContent = "Menyimpan...";

        try {
            const res = await fetch(ARTICLE_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body, userId: 1 })
            });

            if (!res.ok) throw new Error("Gagal menyimpan.");

            const newId = articlesData.length > 0 ? Math.max(...articlesData.map(a => a.id)) + 1 : 101;
            articlesData.unshift({ id: newId, title, body });

            resetFormArtikel();
            filterArtikel();
        } catch (error) {
            alert("Gagal menambahkan artikel.");
        } finally {
            btnSubmitArticle.disabled = false;
            btnSubmitArticle.textContent = "Simpan Artikel";
        }
    }

    function setupEditArtikel(id) {
        const target = articlesData.find((a) => a.id === id);
        if (!target) return;

        isEditingArticle = true;
        editArticleId = id;
        articleIdInput.value = target.id;
        articleTitleInput.value = target.title;
        articleBodyInput.value = target.body;

        btnSubmitArticle.textContent = "Update Artikel";
        btnCancelArticle.style.display = "inline-block";

        blogSection.scrollIntoView({ behavior: "smooth" });
    }

    async function updateArtikel(id, title, body) {
        btnSubmitArticle.disabled = true;
        btnSubmitArticle.textContent = "Updating...";

        try {
            await fetch(`${ARTICLE_API}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, title, body, userId: 1 })
            });

            const index = articlesData.findIndex((a) => a.id === id);
            if (index !== -1) {
                articlesData[index].title = title;
                articlesData[index].body = body;
            }

            resetFormArtikel();
            filterArtikel();
        } catch (error) {
            alert("Gagal mengupdate artikel.");
        } finally {
            btnSubmitArticle.disabled = false;
        }
    }

    async function hapusArtikel(id) {
        if (!confirm(`Apakah Anda yakin ingin menghapus artikel #${id}?`)) return;

        try {
            await fetch(`${ARTICLE_API}/${id}`, { method: "DELETE" });
            articlesData = articlesData.filter((a) => a.id !== id);
            filterArtikel();
        } catch (error) {
            alert("Gagal menghapus artikel.");
        }
    }

    articleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = articleTitleInput.value.trim();
        const body = articleBodyInput.value.trim();

        if (!title || !body) return;

        if (isEditingArticle) {
            updateArtikel(editArticleId, title, body);
        } else {
            tambahArtikel(title, body);
        }
    });

    btnCancelArticle.addEventListener("click", resetFormArtikel);

    inputCariArticle.addEventListener("input", filterArtikel);

    function filterArtikel() {
        const keyword = inputCariArticle.value.toLowerCase().trim();
        const filtered = articlesData.filter((a) =>
            a.title.toLowerCase().includes(keyword)
        );
        renderDaftarArtikel(filtered);
    }

    function resetFormArtikel() {
        isEditingArticle = false;
        editArticleId = null;
        articleForm.reset();
        btnSubmitArticle.textContent = "Simpan Artikel";
        btnCancelArticle.style.display = "none";
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
    }

    terapkanTema(temaSaatIni);
    muatDataUsers();
    muatDataArtikel();

})();