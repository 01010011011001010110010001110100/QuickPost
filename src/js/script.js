const form = document.getElementById('mensajeForm');
const mensajesDiv = document.getElementById('mensajes');

// Obtener mensajes al cargar la página
async function obtenerMensajes() {
    const res = await fetch('http://localhost:5000/api/mensajes');
    const mensajes = await res.json();
    mensajesDiv.innerHTML = mensajes.map(msg => `<p>${msg.texto} - <small>${new Date(msg.fecha).toLocaleString()}</small></p>`).join('');
}

// Enviar nuevo mensaje
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const texto = document.getElementById('mensaje').value;

    const res = await fetch('http://localhost:5000/api/mensajes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto }),
    });

    if (res.ok) {
        document.getElementById('mensaje').value = '';
        obtenerMensajes();
    }
});

// Cargar mensajes al inicio
obtenerMensajes();
