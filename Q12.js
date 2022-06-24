let calcularFatorial = (fatorial) => {
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
    let resultado = fatorial;
    let primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(2))
console.log(calcularFatorial(4))
console.log(calcularFatorial(3))