let num = parseInt(prompt("Ingrese el numero hasta donde quiere sumar"))
let resultado = 0
while (num!=0) {
    resultado = resultado+num
    num--;
}
console.log("la suma es:", resultado);
