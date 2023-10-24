import cors from 'cors';

//puerto de la app
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

//se exporta cors con las opciones de corsOptions 
module.exports = cors(corsOptions);