import { Connection }  from "mysql2";
import redis from "../../services/redis";

export class UserUtils {
    private database;

    constructor(db) {
        this.database = db;
    }

    async getUser() {
        const existCahce = await redis.get('allUsers');
        if (existCahce) {
            return JSON.parse(existCahce);
        } 
        const [rows, fields] = await this.database.query('SELECT * FROM users');
        const sendable = {
            rows,
            fields
        }
        await redis.set('allUsers', JSON.stringify(sendable));

        const todayEnd = new Date().setHours(23, 59, 59, 999);

        redis.expireAt("allUsers", todayEnd/1000);

        return sendable;
        
    }
}