/* Soal 15 - Challenge Inventaris */

let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

let keyboard = inventaris.indexOf("Keyboard")
let printer = inventaris.includes("Printer")
inventaris.splice(1, 1, "Headset")
let slice = inventaris.slice(-2)

console.log(inventaris);
console.log(keyboard);
console.log(printer);
console.log(slice);