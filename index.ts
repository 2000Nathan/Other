const express = require("express");
import routes from "./src/network";
import { init } from "./src/services/serviceLocator/composer";


const app = express();

init();



const port = 9000;

// Inicializa el servidor
const initilize = () => {
    console.log(`Server is running on port ${port}`);
}

// Inicializa el servidor
routes(app);

app.listen(port ,initilize);
