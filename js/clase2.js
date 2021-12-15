function correr() {
  let valorProducto = 5;
  let numeroIngresado = prompt("Ingresar valor de producto");

  if (!isNaN(numeroIngresado) || numeroIngresado === null) {
    if (numeroIngresado == 5) {
      alert("El valor ingresado es 5, es correcto");
    } else {
      if (numeroIngresado < 5) {
        alert(`El valor ingresado es ${numeroIngresado}, el cual es menor a 5`);
      } else {
        alert(`El valor ingresado es ${numeroIngresado}, el cual es mayor a 5`);
      }
    }
  } else {
    alert("Ingresa solo numeros por favor");
  }
}
