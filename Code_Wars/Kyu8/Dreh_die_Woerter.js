"use strict";
// Beschreibung:
// Schreibe eine Funktion, die die Reihenfolge der Wörter in einem String umkehrt.
// Wörter sind durch ein Leerzeichen getrennt.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
exports.reverseWords = reverseWords;
console.log(reverseWords("Hallo Welt")); // => "Welt Hallo"
console.log(reverseWords("Code Wars")); // => "Wars Code"
console.log(reverseWords("Type Script")); // => "Script Type"
