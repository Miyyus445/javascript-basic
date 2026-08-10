/* Soal 6 */

const url = "https://santri.dev";

const cekAwalan = url.startsWith("https");
const cekAkhiran = url.endsWith(".dev");

console.log(`Menggunakan HTTPS: ${ cekAwalan }`);
console.log(`domain .dev: ${ cekAkhiran }`);