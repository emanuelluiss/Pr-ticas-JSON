let valorDaAnuidade = (mes, anuidade) => {
    if (mes > 0 && mes < 13) {
        let atraso = mes - 1
        return (anuidade * ((1 + (5 / 100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}
console.log(valorDaAnuidade(4, 2000))
console.log(valorDaAnuidade(12, 1000))
console.log(valorDaAnuidade(7, 600))