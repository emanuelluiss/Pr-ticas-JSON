let verificarString = (string1, string2) => {
    let estaContido = true
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let p = 0; p < string2.length; p++) {
            let caractereString2 = string2.charAt(p).toLowerCase()
            if (caractereString1 === caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificarString('abc', 'cba'))
console.log(verificarString('DEF', 'fea'))
console.log(verificarString('gHi', 'IhG'))
console.log(verificarString('Emanuel', 'Manuele'))