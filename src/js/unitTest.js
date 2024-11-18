// Simulamos un backend para almacenar mensajes
const mensajes = [];

// Función para enviar mensajes
function enviarMensaje(usuario, texto) {
  if (!usuario || !texto) {
    throw new Error('Usuario y texto son obligatorios');
  }
  const mensajeFormateado = {
    usuario,
    texto,
    fecha: new Date().toISOString(),
  };
  mensajes.push(mensajeFormateado);
  return mensajeFormateado;
}

module.exports = { enviarMensaje, mensajes };
