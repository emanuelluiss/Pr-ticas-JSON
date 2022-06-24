let observarIntervalo = (vetor) => {
    let numerosNoIntervalo = 0
    let numerosForaDoIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 10 || vetor[i] > 20) {
            numerosForaDoIntervalo++
        }
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            numerosNoIntervalo++
        }
    }
    console.log(`${numerosNoIntervalo} números dentro do intervalo. ${numerosForaDoIntervalo} números fora do intervalo. `)
}

observarIntervalo([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])
observarIntervalo([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24])