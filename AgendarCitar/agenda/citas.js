function agregarCita(Agenda, nombreCliente, Servicio, horaCita) {
  Agenda.push({ nombreCliente: nombreCliente, Servicio: Servicio, horaCita: horaCita, completada: false });
}

function completarCita(Agenda, indice) {
  if (indice < 0 || indice >= Agenda.length) return false;
  Agenda[indice].completada = true;
  return true;
}

function eliminarCita(Agenda, indice) {
  if (indice < 0 || indice >= Agenda.length) return false;
  Agenda.splice(indice, 1);
  return true;
}

function horaDisponible(Agenda, horaCita) {
  for (let i = 0; i < Agenda.length; i++) {
    if (Agenda[i].horaCita === horaCita) {
      return false;  
    }
  }
  return true; 
}

module.exports = { agregarCita, completarCita, eliminarCita, horaDisponible };