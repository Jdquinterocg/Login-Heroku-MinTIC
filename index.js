// Traigase express de la instalacion express y me la guarda en la constante express
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routers');
const bodyParser = require('body-parser');
const cors = require('cors');

//Entrada de la aplicacion, como la estancia de express
const app = express();
app.use(cors())
//Middleware Morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


//Primera Ruta
// Ruta, request,respuesta
app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

//Servidor escuchando en el local host, puerto 3000
app.listen(app.get('PORT'), () => {
    console.log('server up');
});