"use strict";
// Beschreibung:
// Schreibe eine Funktion, die überprüft, ob ein gegebener String leer ist.
// Wenn der String leer ist, gib `true` zurück, andernfalls `false`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
function isEmpty(str) {
    //return str === '';
    return str === '' ? true : (str === ' ' ? false : false);
}
exports.isEmpty = isEmpty;
console.log(isEmpty("")); // => true
console.log(isEmpty("Hallo")); // => false
console.log(isEmpty(" ")); // => false
