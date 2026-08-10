/* Soal 9 */

const kalimat = "JavaScript itu seru. Saya suka JavaScript.";

const gantiKata = kalimat.replace("JavaScript", "TypeScript");
const gantiKataSemua = kalimat.replaceAll("JavaScript", "TypeScript");

console.log(gantiKata);
console.log(gantiKataSemua);