import { Connection } from "mysql2/promise";
import { DependencyLocator } from "./dependenciesLocator";
import database from "../database";
import { UserUtils } from "../../utils/users";
import { UserUtilsInterface } from "../../interfaces/utils/user";

export const di = DependencyLocator.getInstance();

const types = {
    database: "database-conexion",
    users: "users-utils"
}

function getDatabase(): Connection {
    return di.get(types.database);
}

export async  function init() {
    const db = await database;
    di.bindLazySingleton(types.database, () => db)
    di.bindFactory(types.users, () => new UserUtils(getDatabase()));
}

export function getUserUtils(): UserUtilsInterface {
    return di.get(types.users);
}