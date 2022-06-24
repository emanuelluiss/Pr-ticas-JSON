let calcularPreco = (codigoProduto, quantidade) => {
    switch (codigoProduto) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return 'Produto não existente!'
    }
}
console.log(calcularPreco(100, 2))
console.log(calcularPreco(200, 3))
console.log(calcularPreco(300, 4))
console.log(calcularPreco(400, 5))
console.log(calcularPreco(500, 6))
console.log(calcularPreco(600, 7))
console.log(calcularPreco(700, 8))