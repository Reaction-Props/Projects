"use strict";
// Beschreibung:
// Schreibe eine Funktion, die einen String n-mal wiederholt.
// Der Parameter `n` gibt an, wie oft der String wiederholt werden soll.
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatStr = repeatStr;
function repeatStr(n, s) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += s;
    }
    return result;
}
console.log(repeatStr(3, "Hallo")); // => "HalloHalloHallo"
console.log(repeatStr(2, "Test")); // => "TestTest"
console.log(repeatStr(5, "A")); // => "AAAAA"
