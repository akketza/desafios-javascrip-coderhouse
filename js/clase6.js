function correr() {
  class alumno {
    constructor(nombre, genero, edad) {
      this.nombre = nombre.toUpperCase();
      this.genero = genero.toUpperCase();
      this.edad = edad;
    }
  }

  function infoAlumno(arrayAlumno) {
    let nombre = prompt("Ingrese nombre del alumno");
    let genero = prompt("Ingrese el genero del alumno");
    let edad = prompt("Ingrese edad del alumno");

    const nuevoAlumno = new alumno(nombre, genero, edad);
    arrayAlumno.push(nuevoAlumno);
    console.log("Nuevo alumno cargado al sistema correctamente");
  }

  function mostrarAlumnos(arrayAlumno) {
    if (arrayAlumno.length) {
      for (i = 0; i < arrayAlumno.length; i++) {
        console.log("Alumno " + (i + 1) + ": ");
        console.log(arrayAlumno[i]);
      }
    } else {
      console.log("No hay ningun alumno en el sistema");
    }
  }

  let arrayAlumno = [];
  let opcion = prompt(
    "Ingrese una opcion: \n 1: Cargar alumno \n 2: Mostrar alumnos en consola  \n 3: Salir"
  );

  while (opcion !== "3") {
    if (opcion === "1") {
      infoAlumno(arrayAlumno);
    }
    if (opcion === "2") {
      mostrarAlumnos(arrayAlumno);
    }

    opcion = prompt(
      "Ingrese una opcion: \n 1: Cargar alumno \n 2: Mostrar alumnos en consola  \n 3: Salir"
    );
  }

  arrayAlumno.sort((a, b) => {
    if (a.edad < b.edad) {
      return -1;
    }
    if (a.edad > b.edad) {
      return 1;
    }
    return 0;
  });

  console.log(arrayAlumno);

  alert("Muchas gracias!🥰");
}