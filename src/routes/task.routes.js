const express = require('express');
const router = express.Router();

const Task = require('../models/task.js');

router.get('/',async(req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/cargar/eventos',async(req, res) =>{
    const tasks = await Task.find();
      const eventos = tasks.map(eve => ({
          nombre: eve.nombre
     }))
     res.json(eventos);
});

router.get('/:id', async(req , res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})


router.post('/', (req, res) =>{
    Task.create(req.body, (err, data) => {
        if(err) console.error(err);
        console.log("Creado el evento", data);
        res.json({status:'Task Saved'});
    });
})

router.put('/:id', async(req, res) => {
    const { nombre, categoria, fecha, hora, lugar, cantidad, detalle} = req.body;
    const newTask = {nombre, categoria, fecha, hora, lugar, cantidad, detalle};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
})

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
})

module.exports = router;