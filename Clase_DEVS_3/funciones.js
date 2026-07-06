// Funciones - uan funciones un bloque de código que se puede reutilizar en cualquier parte del programa.

// La funcion Simple 

function saludar() {
    console.log("Hola, bienvenido a la clase ");
}

saludar(); // Llamada a la función}


// funcion con parametros

function saludarPersona(nombre) {
    console.log("Hola, " + nombre + ", bienvenido a la clase ");
}

saludarPersona("Ana"); // Llamada a la función con un argumento


// funcion con parametros y retorno de valor
function clasificar(prioridad) {
    if (prioridad > 10) {
        return "esta Tarea Es Urgente";
    } else if (prioridad >= 5) {
        return "Esta Tarea No Es Urgente";
    } else {
        return "Esta Tarea Es Normal";
    }
}

const resultado = clasificar(7); // Llamada a la función con un argumento
console.log(resultado); // Muestra el resultado de la función  

//

function construirEtiqueta(titulo, prioridad) {
  const nivel = clasificar(prioridad);   // ← usa el RETURN de clasificar
  return titulo + " [" + nivel + "]";
}

console.log(construirEtiqueta("Pagar factura", 5));   // Pagar factura [URGENTE]
console.log(construirEtiqueta("Regar plantas", 2));   // Regar plantas [normal]