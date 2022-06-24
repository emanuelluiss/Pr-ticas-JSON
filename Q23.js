let mediaPonderada = (codigoDoAluno, nota1, nota2, nota3) => {
    let peso = 10
    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / peso
    let maiorNota = nota1
    if (nota2 > maiorNota) {
        maiorNota = nota2;
        media = (nota2 * 4 + nota1 * 3 + nota3 * 3) / peso
    }
    if (nota3 > maiorNota) {
        maiorNota = nota3;
        media = (nota3 * 4 + nota2 * 3 + nota1 * 3) / peso
    }
    console.log(`CDA ${codigoDoAluno}`)
    console.log(`Notas: ${nota1}/${nota2}/${nota3}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`${media < 5 ? 'Reprovado' : 'Aprovado'}`)
}

mediaPonderada(07, 8, 6, 3)
mediaPonderada(11, 5, 4, 1)
mediaPonderada(33, 1, 3, 10)