// ej1 suma de números pares

    let n = Number(prompt("Dame un número"))
    let total = 1

function sumarPares() {

    for (let i = 1; i <= n; i++) {
        if (n % 2 == 0) {
            total = total + n
        } 
    } return total
}
console.log(sumarPares())

sumarPares()

// ej2 tabla de multiplicar
// let n = Number(prompt("Dame un número"))
// let tope = Number(prompt("Dame un tope"))

// function tablaMultiplicar() {
//     for (let n = 1; n <= tope; n++) {
//         tope = tope*n
//         console.log (tablaMultiplicar())
//     } return tope
// }

// tablaMultiplicar()






