function correr (){
let numero = -1
let acumulador = 0

while (numero != 0) {
    numero = parseInt(prompt("Ingrese un numero"))
    acumulador = acumulador + numero
}

console.log(`El resultado es ${acumulador}`)
}