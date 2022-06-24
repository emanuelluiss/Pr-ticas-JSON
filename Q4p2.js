function dividir(dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor)
    console.log(dividendo, '/', divisor, '=', resultado)
    let resto = dividendo - (resultado * divisor)
    console.log('resto =', resto)
}
dividir(11, 2)
dividir(33, 5)