function darkmode() {
  let modoNoche = document.body;
  modoNoche.className = "dark-mode";
}

function lightmode() {
  let modoDia = document.body;
  modoDia.className = "light-mode";
}

let peliculas = [];
const agregarPelicula = (e) => {
  e.preventDefault();
  let pelicula = {
    titulo: document.getElementById("titulo").value,
    numero: document.getElementById("numero").value,
  };
  peliculas.push(pelicula);

  document.querySelector("form").reset();

  console.log("se agrego", peliculas);

  document.getElementById(
    "print"
  ).innerHTML = `${pelicula.titulo} ${pelicula.numero} `;

  localStorage.setItem("peliculasLista", JSON.stringify(peliculas));
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", agregarPelicula);
});
