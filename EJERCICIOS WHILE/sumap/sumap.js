let num = parseInt(prompt("Ingrese el numero hasta donde quiere sumar las potencias"))
let result = 0
while (num!=0) {
    result = result+(num**2)
    num--;
    
}
console.log(result);