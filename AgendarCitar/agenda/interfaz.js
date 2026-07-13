function mostrarMenu() {
  console.log("\n--- AGENDA TU CITAS ---");
  console.log("1. Agendar cita");
  console.log("2. Ver Agenda");
  console.log("3. Atender Cita");
  console.log("4. Eliminar cita");
  console.log("5. Salir");
}

function mostrarAgenda(Agenda) {
  if (Agenda.length === 0) {
    console.log("No hay citas registradas.");
    return;
  }

  let citasPendientes = 0;
  let citasCompletadas = 0;

  for (let i = 0; i < Agenda.length; i++) {
    const t = Agenda[i];
    let estado;
    if (t.completada === true) {
      estado = "[✓]";
      citasCompletadas++;
    } else {
      estado = "[ ]";
      citasPendientes++;
    }
    console.log((i + 1) + ". " + estado + " " + t.nombreCliente + " - " + t.Servicio + " (" + t.horaCita + ")");

  

  }
  console.log("Resumen:");
  console.log("Citas pendientes: " + citasPendientes);
  console.log("Citas completadas: " + citasCompletadas);
  
}



module.exports = { mostrarMenu, mostrarAgenda };