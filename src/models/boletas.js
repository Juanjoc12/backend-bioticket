const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    nombre: {type: String, required: true},
    cantidad: { type: Number, required: true}
});

module.exports = mongoose.model('boletas', TaskSchema);