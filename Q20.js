let sacarDinheiro = (valorDoSaque) => {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorDaNota = calcularValorDaNota(valorDoSaque)

    while (valorDoSaque >= valorDaNota) {
        switch (valorDaNota) {
            case 100:
                valorDoSaque -= 100
                contador100++
                break
            case 50:
                valorDoSaque -= 50
                contador50++
                break
            case 10:
                valorDoSaque -= 10
                contador10++
                break
            case 5:
                valorDoSaque -= 5
                contador5++
                break
            case 1:
                valorDoSaque -= 1
                contador1++
                break
        }
        valorDaNota = calcularValorDaNota(valorDoSaque)
    }
    return resultadoDoContador(contador100, contador50, contador10, contador5, contador1)
}

let calcularValorDaNota = (valorDoSaque) => {
    if (valorDoSaque >= 100) {
        return 100
    }
    if (valorDoSaque >= 50) {
        return 50
    }
    if (valorDoSaque >= 10) {
        return 10
    }
    if (valorDoSaque >= 5) {
        return 5
    }
    if (valorDoSaque >= 1) {
        return 1
    }
}

let resultadoDoContador = (contador100, contador50, contador10, contador5, contador1) => {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153))
console.log(sacarDinheiro(869))
console.log(sacarDinheiro(23))
console.log(sacarDinheiro(1543))