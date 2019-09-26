const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();
var cors = require('cors');
app.use(cors());
//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/task.routes'))

//Static files


//Empezando el servidor
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});