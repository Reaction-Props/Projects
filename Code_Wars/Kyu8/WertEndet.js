"use strict";
// Beschreibung:
// Schreibe eine Funktion, die überprüft, ob ein String mit einem gegebenen Wert endet.
// Die Funktion erhält zwei Parameter:
// 1. Der String, den du prüfen möchtest.
// 2. Der Wert, auf den du das Ende des Strings prüfen möchtest.
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsWith = endsWith;
function endsWith(str, ending) {
    // 1 Weg => return str.endsWith(ending)
    var strEnd = str.slice(str.length - ending.length);
    return strEnd === ending;
}
console.log(endsWith("Hallo Welt", "Welt")); // => true
console.log(endsWith("CodeWars", "Code")); // => false
console.log(endsWith("TypeScript", "Script")); // => true
