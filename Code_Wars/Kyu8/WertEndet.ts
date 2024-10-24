// Beschreibung:
// Schreibe eine Funktion, die überprüft, ob ein String mit einem gegebenen Wert endet.
// Die Funktion erhält zwei Parameter:
// 1. Der String, den du prüfen möchtest.
// 2. Der Wert, auf den du das Ende des Strings prüfen möchtest.

export function endsWith(str: string, ending: string): boolean {
    // 1 Weg => return str.endsWith(ending)
    const strEnd = str.slice(str.length - ending.length);
    return strEnd === ending
}

console.log(endsWith("Hallo Welt", "Welt"));   // => true
console.log(endsWith("CodeWars", "Code"));     // => false
console.log(endsWith("TypeScript", "Script")); // => true