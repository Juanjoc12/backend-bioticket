const express = require('express');
const router = express.Router();

const Boletas = require('../models/boletas.js');

router.get('/', async (req, res) =>{
    const boletas = await Boletas.find();
    res.json(boletas);
});

router.post('/', (req, res) =>{
    Boletas.create(req.body, (err, data) => {
        if(err) console.error(err);
        console.log("Compra registrada", data);
        res.json({status:'Saved compra'});
    });
})

module.exports = router;