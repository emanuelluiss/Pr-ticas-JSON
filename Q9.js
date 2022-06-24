function sistemaDeNotas(notas) {
    let arredondar = (notas) => {
        if (notas % 5 > 2) {
            return notas + (5 - (notas % 5))
        } else {
            return notas
        }
    }
    let notaArredondada = arredondar(notas)
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}`)
    } else {
        console.log(`Reprovado com nota ${notas}`)
    }
}

sistemaDeNotas(38)
sistemaDeNotas(29)
sistemaDeNotas(99)