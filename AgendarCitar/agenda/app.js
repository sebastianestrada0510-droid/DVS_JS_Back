const prompt = require("prompt-sync")();
const citas = require("./citas.js");
const interfaz = require("./interfaz.js");

const Agenda = [];

while (true) {
  interfaz.mostrarMenu();
  const opcion = prompt("Elige una opción: ");

  switch (opcion) {
    case "1": {
      const nombreCliente = prompt("Nombre del cliente: ");
      if (nombreCliente.trim() === "") {
        console.log("El nombre del cliente no puede estar vacío.");
        break;
      }
      const Servicio = prompt("Servicio: ");
      if (Servicio.trim() === "") {
        console.log("El servicio no puede estar vacío.");
        break;
      }

      const horaCita = prompt("Hora de la cita: ");
      if (citas.horaDisponible(Agenda, horaCita) ) {
        citas.agregarCita(Agenda, nombreCliente, Servicio, horaCita);
        console.log("Cita agendada.");
      } else {
        console.log("La hora de la cita ya está ocupada. Por favor, elige otra hora.");
        break;
      }
      
      
    }
    case "2":
      interfaz.mostrarAgenda(Agenda);
      break;
    case "3": {
      interfaz.mostrarAgenda(Agenda);
      const num = Number(prompt("Número a completar: "));
      const completada = citas.completarCita(Agenda, num - 1);
      if (completada === true) {
        console.log("Cita atendida.");
      } else {
        console.log("Esa cita no existe.");
      }
      break;
    }
    case "4": {
      interfaz.mostrarAgenda(Agenda);
      const num = Number(prompt("Número a eliminar: "));
      const eliminada = citas.eliminarCita(Agenda, num - 1);
      if (eliminada === true) {
        console.log("Cita eliminada.");
      } else {
        console.log("Esa cita no existe.");
      }
      break;
    }
    case "5":
      console.log("Hasta luego.");
      break;
    default:
      console.log("Opción no válida.");
  }

  if (opcion === "5") break;
}