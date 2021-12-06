function correr (){
class alumno {
    constructor(nombre, genero, edad) {
        this.nombre = nombre.toUpperCase();
        this.genero = genero.toUpperCase();
        this.edad = parseInt(edad);
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y soy ${this.genero}`)
    }
    decirEdad() {
        console.log(`Tengo ${this.edad} años`)
    }
}
const ignacio = new alumno("Ignacio", "Varon", "16");
const camila = new alumno("Camila", "Mujer", "17");
ignacio.saludar();
ignacio.decirEdad();
camila.saludar();
camila.decirEdad();
}