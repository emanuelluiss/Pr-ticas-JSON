let multiplicaVetor = (vetor, multiplicador) => {
    let vetorResultado = []
    vetor.forEach(elemento => {

        vetorResultado.push(elemento * multiplicador)
        if (elemento.length > 5) {
            vetorResultado.push(elemento * multiplicador)
        }
    })

    return vetorResultado
}

console.log(multiplicaVetor([1, 2, 3, 4, 5], 5))
console.log(multiplicaVetor([3, 6, 9, 12, 15, 18], 6))
console.log(multiplicaVetor([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2))