// Beschreibung:
// Schreibe eine Funktion, die alle Zeichen eines Strings in Großbuchstaben umwandelt.

export function toUpperCase(str: string): string {
    return str.toUpperCase()
}

console.log(toUpperCase("Hallo"));  // => "HALLO"
console.log(toUpperCase("test"));   // => "TEST"
console.log(toUpperCase("CodeWars"));   // => "CODEWARS"
