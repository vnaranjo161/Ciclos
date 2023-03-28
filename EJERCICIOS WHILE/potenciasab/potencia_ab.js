let num = parseInt(prompt("Ingrese el numero base"))
let num2 = parseInt(prompt("Ingrese el numero al cual lo quiere potenciar"))
let resultado = 1
while (num2!=0) {
    resultado *= num
    num2--;  
}
console.log("el resultado es:", resultado);