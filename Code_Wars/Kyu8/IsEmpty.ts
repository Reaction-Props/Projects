// Beschreibung:
// Schreibe eine Funktion, die überprüft, ob ein gegebener String leer ist.
// Wenn der String leer ist, gib `true` zurück, andernfalls `false`.

export function isEmpty(str: string): boolean {
    //return str === '';
    return  str === '' ? true: (str === ' ' ? false: false)
}

console.log(isEmpty(""));       // => true
console.log(isEmpty("Hallo"));  // => false
console.log(isEmpty(" "));      // => false