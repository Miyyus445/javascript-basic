/* Bonus Challenge ⭐ */

const playlist = {
    namaPlaylist: "My Song",
    lagu: [
        "Iqro - Raim Laode", 
        "Dunia Yang Nanti - Raim Laode", 
        "About You - The 1975",
        "Koiiro - Musawo",
        "Kasih Arahan - Akbar Chalay",
        "Astaga Bercanda - Akbar Chalay",
        "Ghost - Justin Bieber",
        "Multo - Cup Of Joe",
        "Bergema Sampai Selamanya - Nadhif Basalamah",
        "Bi Saraha - Abeer Nehme",
    ],

    tambahLagu(Judul) {
        this.lagu.push(Judul);
    },

    hapusLagu(Judul) {
        const index = this.lagu.indexOf(Judul);
        if (index !== -1) {
            this.lagu.splice(index, 1);
        }
    },

    tampilkanPlaylist() {
        console.log(`==== Playlist ${this.namaPlaylist} ====`);

        for (let i = 0; i < this.lagu.length; i++) {
            console.log((i + 1) + ". " + this.lagu[i]);
        }

        console.log("--------------------------\n");
    },
};

playlist.tampilkanPlaylist();

playlist.tambahLagu("1x1 - Bring Me The Horizon ft. Nova");
playlist.hapusLagu("Astaga Bercanda - Akbar Chalay");

playlist.tampilkanPlaylist();