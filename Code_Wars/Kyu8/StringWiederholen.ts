// Beschreibung:
// Schreibe eine Funktion, die einen String n-mal wiederholt.
// Der Parameter `n` gibt an, wie oft der String wiederholt werden soll.

export function repeatStr(n: number, s: string): string {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

console.log(repeatStr(3, "Hallo"));  // => "HalloHalloHallo"
console.log(repeatStr(2, "Test"));   // => "TestTest"
console.log(repeatStr(5, "A"));      // => "AAAAA"
