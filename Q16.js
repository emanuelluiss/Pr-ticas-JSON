let calculadoraBasica = (a, operador, b) => {
    switch (operador) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            console.log('Operador inválido')
    }
}
console.log(calculadoraBasica(2, '+', 2))
console.log(calculadoraBasica(3, '#', 3))