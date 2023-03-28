let num = parseFloat(prompt("Ingrese el numero"))
let cont = 0
let result = 0
while (num!=0) {
    result += num
    num = parseFloat(prompt("Ingrese el numero"))
    cont++;
}
console.log("El promedio es: ", result/cont);