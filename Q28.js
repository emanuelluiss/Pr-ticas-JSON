let paresEImpares = (vetorNumeros) => {
    let nPares = 0
    let nImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            nPares++
        } else {
            nImpares++
        }
    }
    console.log(`${nPares} números pares e ${nImpares} números ímpares.`)
}

paresEImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])