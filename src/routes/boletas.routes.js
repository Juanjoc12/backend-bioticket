const express = require('express');
const router = express.Router();

const Boletas = require('../models/boletas.js');
const Task = require('../models/task');

router.get('/', async (req, res) =>{
    const boletas = await Boletas.find();
    res.json(boletas);
});

router.post('/', (req, res) =>{
    Boletas.create(req.body, async (err, data) => {
        if(err) console.error(err);
        console.log("Compra registrada", data);
        await Task.update({ nombre: req.body.nombre }, { $inc: { cantidad: req.body.cantidad * -1 }  })
        res.json({status:'Saved compra'});
    });
})


module.exports = router;