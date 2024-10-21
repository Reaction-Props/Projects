"use strict";
// Beschreibung:
// Schreibe eine Funktion, die alle Leerzeichen aus einem gegebenen String entfernt.
function noSpace(x) {
    return x.split(' ').join('');
}
console.log(noSpace("Hallo Welt")); // => "HalloWelt"
console.log(noSpace("Code Wars")); // => "CodeWars"
console.log(noSpace("Type Script")); // => "TypeScript"
