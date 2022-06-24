function formataCasasDecimais(decimais) {
    let valorEmReais = `R$ ${decimais.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

let jurosSimples = (capitalInicial, taxaDeJuros, tempoAplicado) => {
    return (capitalInicial * taxaDeJuros * tempoAplicado) + capitalInicial

}

console.log(jurosSimples(2000, 0.2, 24))
console.log(jurosSimples(3550, 0.6, 12))

let jurosCompostos = (capitalInicial, taxaDeJuros, tempoAplicado) => {
    return (capitalInicial * Math.pow(1 + taxaDeJuros, tempoAplicado)) + capitalInicial
}

console.log(jurosCompostos(2000, 0.2, 24).toFixed(2))
console.log(jurosCompostos(3550, 0.6, 12).toFixed(2))