let pA = (n, a1, r) => {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Soma dos elementos: ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2)
}

let pG = (n, a1, r) => {
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log('Soma dos elementos: ' + (a1 * ((r ** n) - 1)) / (r - 1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)