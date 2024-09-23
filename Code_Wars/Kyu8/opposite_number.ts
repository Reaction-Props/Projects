//Beschreibung:
// Gegeben ist eine Zahl. Gib ihre Gegenzahl zurück.
// Wenn die Zahl positiv ist, gib die negative Version davon zurück, und wenn die Zahl negativ ist, gib die positive Version zurück.
// Wenn die Zahl 0 ist, gib einfach 0 zurück.


export function opposite(n: number): number {
    return -n;
}

console.log(opposite(1));    // => -1
console.log(opposite(-34));  // => 34
console.log(opposite(0));    // => 0


