function correr (){
    const cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))
    let sumatoria =0

    for (let i=0; i < cantidadAlumnos; i++ ){
        const edadAlumnos = verificarEdad()
        sumatoria = sumatoria + edadAlumnos
        console.log(edadAlumnos, sumatoria)
    }
    const promedio = sumatoria / cantidadAlumnos

    return mostrarPromedio(promedio) 
}

function verificarEdad (){
    let edadValida = parseInt(prompt("Ingrese la edad del alumno"))
    while (edadValida < 0){
        alert(`Ingrese una edad valida, usted ingreso ${edadValida}`)
        edadValida = parseInt(prompt("Ingrese la edad del alumno"))
    }
    return edadValida
}

function mostrarPromedio (numero){
    alert(`El promedio de edad es ${numero}`)
}

