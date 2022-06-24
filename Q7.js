let bhaskara = (ax2, bx, c) => {
    let delta = (bx ** 2) - (4 * ax2 * c)
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    if (delta < 0) {
        return "Delta é negativo";
    } else {
        return [x1, x2]
    }
}
console.log(bhaskara(1, -5, 6))
console.log(bhaskara(12, 5, 12))