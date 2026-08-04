/* Bonus Challenge - Mini Playlist Musik */

let playlist = [];

playlist.push(
  "Dunia Yang Nanti - Raim Laode",
  "About You - The 1975",
  "Koiiro - Musawo",
  "Bergema Sampai Selamanya - Nadhif Basalamah",
  "Kasih Arahan - Akbar Chalay"
);

playlist.pop("Kasih Arahan - Akbar Chalay")
playlist.unshift("Iqro - Raim Laode")

console.log("=== Playlist ===");

for (let i = 0; i < playlist.length; i++) {
    console.log((i + 1) + ". " + playlist[i]);
}

console.log("Total : " + playlist.length)