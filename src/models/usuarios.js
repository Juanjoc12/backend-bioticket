const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    nombre: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
});

module.exports = mongoose.model('usuarios', TaskSchema);