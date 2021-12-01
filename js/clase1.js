function correr (){
    alert("Responde las siguientes preguntas!");
    let edad = prompt("Ingrese su año de nacimiento");
    let añoActual = 2021;

    let respuesta = + añoActual - + edad;
    
    alert("Tu edad es" + ' ' + respuesta);

}