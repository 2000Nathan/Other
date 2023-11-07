import routes from "./src/network";

const express = require("express");

const server = express();
routes(server);

const port = 9000;

// Inicializa el servidor
const initilize = () => {
    console.log(`Server is running on port ${port}`);
}

// Inicializa el servidor
routes(server);

server.listen(port ,initilize);
