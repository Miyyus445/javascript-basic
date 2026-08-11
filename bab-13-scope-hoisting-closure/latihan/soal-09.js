/* Soal-09 */


// Apa yang terjadi?

console.log(umur);

const umur = 17; // Output: ReferenceError: Cannot access 'umur' before initialization

// Bandingkan perilakunya dengan:

console.log(umur);

var umur = 17; // Output: undefined

// Apa perbedaan keduanya?

// Output (const umur) ReferenceError: Cannot access 'umur' before initialization, tidak dapat di hoisting
// Output (var umur) undefined, bisa di hoisting akan tetapi nilanya tetap undefined hingga baris yang menugaskan nilai dieksekusi.