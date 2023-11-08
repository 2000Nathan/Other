import { Connection } from "mysql2";
import { DependencyLocator } from "./dependenciesLocator";
import database from "../database";
import {UserUtils} from "../../utils/users";
import { type } from "os";

const di = DependencyLocator.getInstance();

const types = {
    database: "database-conexion",
    users: "users-utils"
}

function getDatabase() {
    return di.get(types.database);
}

function init() {
    di.bindLazySingleton(types.database, () => database)
    di.bindFactory(types.users, () => new UserUtils(getDatabase()));
}
