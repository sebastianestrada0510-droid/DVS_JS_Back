// Clase_DEVS_4/app.js Copiar por teclado con .json
// primero ejecutamos por la terminal " npm init -y "
// luego ejecutamos " npm install prompt-sync "


const prompt = require("prompt-sync")();

const nombre = prompt("¿Cómo te llamas? ");
console.log("Hola, " + nombre + ". Bienvenido a tu gestor de tareas.");