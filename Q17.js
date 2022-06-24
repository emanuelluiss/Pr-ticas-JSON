let tiposDeAumento = (plano, salarioAtual) => {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.10
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.20
        default:
            return 'Plano inválido'
    }
}

console.log(tiposDeAumento('A', 1000))
console.log(tiposDeAumento('B', 2000))
console.log(tiposDeAumento('C', 3000))
console.log(tiposDeAumento('D', 4000))