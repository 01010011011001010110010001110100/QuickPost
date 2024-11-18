require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch(err => console.error("Error al conectar a MongoDB Atlas:", err));

// Definir el esquema y modelo de mensaje
const mensajeSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
});
const Mensaje = mongoose.model('Mensaje', mensajeSchema);

// Rutas
app.get('/api/mensajes', async (req, res) => {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
});

app.post('/api/mensajes', async (req, res) => {
    const nuevoMensaje = new Mensaje(req.body);
    await nuevoMensaje.save();
    res.json(nuevoMensaje);
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
