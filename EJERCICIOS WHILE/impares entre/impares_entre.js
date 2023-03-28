let cont = 1
let num = 1
let hasta = parseInt(prompt("Ingrese hasta donde quiere saber los numeros impares"))
while (cont<=hasta) {
    if (num%2!=0) {
        console.log(num);
    }
    num++;
    cont++;
}
