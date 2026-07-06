// un ciclo repite un bloque de código mientras una condición sea verdadera

// ciclo for (inicio; condición; incremento)
for (let i = 0; i < 10; i++) {
    console.log("Vuelta numero " + i);
}


// For of : Cuando vamos a recorrer un arreglo, podemos usar el ciclo for each

const frutas = ["Manzana", "Pera", "Banana", "Naranja"];

for (const fruta of frutas) {
    console.log(fruta);
}


//Ciclos + condiconales 
const tareas = [
    {titulo: "Hacer la compra",prioridad: 5},
    {titulo: "Llamar al médico",prioridad: 3},
    {titulo: "Pagar facturas",prioridad: 1}
];

for (const tarea of tareas) {
    if (tarea.prioridad > 3) {
        console.log(tarea.titulo + " es una tarea urgente");
    } else {
        console.log(tarea.titulo + " no es una tarea urgente");
    }
}
