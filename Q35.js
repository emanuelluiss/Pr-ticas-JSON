let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

let addValoresNoVetor = (vetorInicial, vetorAdicionar) => {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor final: ' + vetorInicial)
}

addValoresNoVetor(vetorPilha, vetorAdiciona)