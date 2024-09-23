"use strict";
//Beschreibung:
// Gegeben ist eine Zahl. Gib ihre Gegenzahl zurück.
// Wenn die Zahl positiv ist, gib die negative Version davon zurück, und wenn die Zahl negativ ist, gib die positive Version zurück.
// Wenn die Zahl 0 ist, gib einfach 0 zurück.
Object.defineProperty(exports, "__esModule", { value: true });
exports.opposite = void 0;
function opposite(n) {
    return -n;
}
exports.opposite = opposite;
console.log(opposite(1)); // => -1
console.log(opposite(-34)); // => 34
console.log(opposite(0)); // => 0
