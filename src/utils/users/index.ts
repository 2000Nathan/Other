import { Connection }  from "mysql2";

export class UserUtils {
    private database;

    constructor(db) {
        this.database = db;
    }

    async function getUser(){
        const [rows, fields] = await this.database.query('SELECT * FROM users');
        return {
            rows,
            fields
        }
        
    }
}