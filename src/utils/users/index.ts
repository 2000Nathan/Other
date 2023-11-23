import { Connection }  from "mysql2/promise";
import redis from "../../services/redis";
import { NewuserFields } from "../../interfaces";

export class UserUtils {
    private database : Connection;

    constructor(database: Connection) {
        this.database = database;
    }

    public async getUserByEmail(email: string): Promise<NewuserFields | string> {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        const [rows] = await this.database.query(query);
        if (Array.isArray(rows) && rows.length === 0) {
            return `User with email ${email} not found`
        }
        return rows[0];
    }

    public async getUser(): Promise<any> {
        const existCahce = await (await redis).get('allUsers');
        if (existCahce) {
            return JSON.parse(existCahce);
        }
        const query = `SELECT * FROM users`;
        const [rows, fields] = await this.database.query(query);
        const sendable = {
            rows,
            fields
        }
        await (await redis).set('allUsers', JSON.stringify(sendable));
        const todayEnd = new Date().setHours(23, 59, 59, 999);
        (await redis).expireAt("allUsers", todayEnd/1000);
        return sendable;
    }
}