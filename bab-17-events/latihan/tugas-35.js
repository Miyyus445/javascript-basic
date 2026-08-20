(function() {
    "use strict";

    // Elemen DOM
    const form = document.querySelector('#form-pemesanan');
    const inputNama = document.querySelector('#nama');
    const inputEmail = document.querySelector('#email');
    const inputFilm = document.querySelector('#film');
    const notification = document.querySelector('#form-notification');
    const resetBtn = document.querySelector('#reset-btn');
    const clearAllBtn = document.querySelector('#clear-all-btn');
    const listContainer = document.querySelector('#ticket-list-container');
    const totalBadge = document.querySelector('#total-badge');

    // State
    let tiketList = [];

    // Function Notification
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = 'form-notification show ' + type;
    }

    function hideNotification() {
        notification.classList.remove('show', 'success', 'error');
        notification.textContent = '';
    }

    // Function Render
    function renderDaftarTiket() {
        listContainer.innerHTML = '';

        if (tiketList.length === 0) {
            listContainer.innerHTML = '<p class="empty-message">Belum ada tiket yang dipesan.</p>';
        } else {
            const listWrapper = document.createElement('div');
            listWrapper.className = 'participant-list';

            tiketList.forEach((tiket, index) => {
                const item = document.createElement('div');
                item.className = 'participant-item';

                item.innerHTML = `
                    <div class="participant-info">
                        <p><strong>Nama</strong>   : ${tiket.nama}</p>
                        <p><strong>Email</strong>  : ${tiket.email}</p>
                        <p><strong>Film</strong>   : 🎬 ${tiket.film}</p>
                    </div>
                    <div class="participant-actions">
                        <button class="btn-small btn-small-danger btn-hapus">Hapus</button>
                    </div>
                `;

                // Event Listener Hapus Satuan
                const btnHapus = item.querySelector('.btn-hapus');
                btnHapus.addEventListener('click', function() {
                    tiketList.splice(index, 1);
                    renderDaftarTiket();
                    hideNotification();
                });

                listWrapper.appendChild(item);
            });

            listContainer.appendChild(listWrapper);
        }

        totalBadge.textContent = `Total: ${tiketList.length} Tiket`;
    }

    // Submit Form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nama = inputNama.value.trim();
        const email = inputEmail.value.trim();
        const film = inputFilm.value.trim();

        if (nama === '' || email === '' || film === '') {
            showNotification('⚠️ Nama, email, dan judul film wajib diisi!', 'error');
            return;
        }

        tiketList.push({ nama, email, film });

        renderDaftarTiket();
        showNotification('✅ Tiket berhasil dipesan!', 'success');

        inputNama.value = '';
        inputEmail.value = '';
        inputFilm.value = '';
        inputNama.focus();
    });

    // Tombol Reset Form
    resetBtn.addEventListener('click', function() {
        inputNama.value = '';
        inputEmail.value = '';
        inputFilm.value = '';
        hideNotification();
        inputNama.focus();
    });

    // Tombol Hapus Semua
    clearAllBtn.addEventListener('click', function() {
        if (tiketList.length === 0) return;

        if (confirm('Yakin ingin menghapus semua pesanan tiket?')) {
            tiketList = [];
            renderDaftarTiket();
            hideNotification();
        }
    });

    renderDaftarTiket();

})();