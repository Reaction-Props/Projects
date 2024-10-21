// Beschreibung:
// Schreibe eine Funktion, die die Reihenfolge der Wörter in einem String umkehrt.
// Wörter sind durch ein Leerzeichen getrennt.

export function reverseWords(str: string): string {
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords("Hallo Welt"));   // => "Welt Hallo"
console.log(reverseWords("Code Wars"));    // => "Wars Code"
console.log(reverseWords("Type Script"));  // => "Script Type"