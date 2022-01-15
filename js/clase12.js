$(document).ready(function () {
  console.log("el dom ta ready");
});

let peliculas = [];
const agregarPelicula = (e) => {
  e.preventDefault();
  let pelicula = {
    titulo: $("#titulo")[0].value,
    numero: $("#numero")[0].value,
  };
  peliculas.push(pelicula);

  document.querySelector("form").reset();

  console.log("se agrego", peliculas);

  $("#print")[0].innerHTML = `${pelicula.titulo} ${pelicula.numero} `;

  localStorage.setItem("peliculasLista", JSON.stringify(peliculas));
};
document.addEventListener("DOMContentLoaded", () => {
  $("#btn")[0].addEventListener("click", agregarPelicula);
});
6;
