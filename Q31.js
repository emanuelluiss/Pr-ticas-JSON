let imprimirNumerosNegativos = (vetor) => {
    let numerosNegativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numerosNegativos++
        }
    }
    return numerosNegativos
}

console.log(imprimirNumerosNegativos([5, 10, -3, 33, -1, 22, -55, -10, 0, 99]))
console.log(imprimirNumerosNegativos([-5, -10, 3, -33, 1, -22, 55, 10, 0, -99]))