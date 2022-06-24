function tamanhoDosTriangulos(a, b, c) {
    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(tamanhoDosTriangulos(2, 2, 2))
console.log(tamanhoDosTriangulos(5, 5, 4))
console.log(tamanhoDosTriangulos(2, 4, 5))