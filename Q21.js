let conferirIdade = (idade) => {
    if (idade < 10) {
        return 'Valor a ser pago: R$ 180,00.'
    }
    if (idade < 30) {
        return 'Valor a ser pago: R$ 150,00.'
    }
    if (idade < 60) {
        return 'Valor a ser pago: R$ 195,00.'
    }
    if (idade > 60) {
        return 'Valor a ser pago: R$295,00.'
    }
}

console.log(conferirIdade(5))
console.log(conferirIdade(15))
console.log(conferirIdade(35))
console.log(conferirIdade(55))
console.log(conferirIdade(65))