let avaliaPontuacoes = (listaDePontos) => {
    let pontuacoes = listaDePontos.split(", ")
    let quebraDeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quebraDeRecordes++
        }
        if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [quebraDeRecordes, piorJogo]
}

console.log(avaliaPontuacoes('1, 2, 3, 4, 5, 5, 6'))
console.log(avaliaPontuacoes('10, 20, 20, 40, 0, 50'))