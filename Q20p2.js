let notas = (valor) => {
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0

    while (valor >= 100) {
        valor -= 100
        notas100++
    }
    while (valor >= 50) {
        valor -= 50
        notas50++
    }
    while (valor >= 10) {
        valor -= 10
        notas10++
    }
    while (valor >= 5) {
        valor -= 5
        notas5++
    }
    while (valor >= 1) {
        valor -= 1
        notas1++
    }
    console.log(`${notas100} nota(s) de R$ 100.`)
    console.log(`${notas50} nota(s) de R$ 50.`)
    console.log(`${notas10} nota(s) de R$ 10.`)
    console.log(`${notas5} nota(s) de R$ 5.`)
    console.log(`${notas1} nota(s) de R$ 1.`)
}
notas(18)