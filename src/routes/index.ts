import { Application } from "express";
import UserNetwork from "../network/users";
import Routes from "../utils/constants/routes.json";

function routes(server: Application) {
    server.use(Routes.userV1, UserNetwork);
}

export default routes;