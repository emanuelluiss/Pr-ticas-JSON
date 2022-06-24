let mediaAritmetica = (vetor) => {
    let media = 0

    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i]
    }

    return Math.min(media / vetor.length)
}

console.log(mediaAritmetica([5, 5, 5]))
console.log(mediaAritmetica([7, 6, 5, 8]))
console.log(mediaAritmetica([8, 10, 9, 1, 6]))