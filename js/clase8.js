function correr() {
  let numeroIngresado = prompt("Ingresar valor de producto");

  const valor = document.getElementById("value");
  valor.innerHTML = `Valor ingresado: ${numeroIngresado}`;
}

function saludo() {
  const msj = document.getElementById("saludo");
  let arrayBienvenida = ["Saludos!", "Bienvenido!", "Hola!", "Buenas!"];

  var randomItem =
    arrayBienvenida[Math.floor(Math.random() * arrayBienvenida.length)];
  msj.innerHTML = `${randomItem}`;
}
