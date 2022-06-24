function formataCasasDecimais(decimais) {
    let valorEmReais = `R$ ${decimais.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formataCasasDecimais(0.1 + 0.2)
formataCasasDecimais(0.30000000000000004)