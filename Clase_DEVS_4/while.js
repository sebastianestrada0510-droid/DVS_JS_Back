/* 
let numero = 1;
while (numero <= 5) {
  console.log("Número: " + numero);
  numero = numero + 1;
}

console.log("El ciclo terminó."); */


const prompt = require("prompt-sync")();

while (true) {
  const texto = prompt("Escribe algo (o 'salir'): ");

  if (texto === "salir") {
    console.log("Programa terminado.");
    break;
  }

  console.log("Escribiste: " + texto);
}