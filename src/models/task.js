const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    nombre: {type: String, required: true},
    categoria: { type: String, required: true},
    fecha: { type: String, required: true},
    hora: { type: String, required: true},
    lugar: { type: String, required: true},
    cantidad: { type: String, required: true},
    detalle: { type: String, required: true}
});

module.exports = mongoose.model('eventos', TaskSchema);