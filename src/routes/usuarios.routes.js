const express = require('express');
const router = express.Router();

const User = require('../models/usuarios.js');

router.get('/', async (req, res) =>{
    const users = await User.find();
    res.json(users);
});

router.post('/', (req, res) =>{
    User.create(req.body, (err, data) => {
        if(err) console.error(err);
        console.log("Usuario registrado", data);
        res.json({status:'User Saved'});
    });
})

module.exports = router;