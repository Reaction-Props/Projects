"use strict";
// Beschreibung:
// Schreibe eine Funktion, die alle Zeichen eines Strings in Großbuchstaben umwandelt.
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = void 0;
function toUpperCase(str) {
    return str.toUpperCase();
}
exports.toUpperCase = toUpperCase;
console.log(toUpperCase("Hallo")); // => "HALLO"
console.log(toUpperCase("test")); // => "TEST"
console.log(toUpperCase("CodeWars")); // => "CODEWARS"
