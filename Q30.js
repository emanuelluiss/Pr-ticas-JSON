let maiorEMenor = (vetor) => {
    let maior = 0
    let menor = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return [maior, menor]
}

console.log(maiorEMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))