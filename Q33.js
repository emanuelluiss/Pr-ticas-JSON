let vetorInteiro = [10, 20, 30, 40]
let vetorString = ['João', 'Chico', 'Laura', 'Emily']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar(...params) {
    let resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorDouble, vetorString))