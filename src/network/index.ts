// Une todos los archivos en una sola para que funcione con el servidor
import { Application } from "express";
import Routes from "../utils/constants/routes.json";
import UserNetwork from "./users";

function routes(server: Application) {
    server.use(Routes.userV1, UserNetwork);
}

export default routes;