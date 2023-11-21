import mysql from 'mysql2/promise';
import 'dotenv/config'



//se crea la conexion a la base de datos
const connection = mysql.createConnection({
    host: process.env.CHAT_IA_DB_HOST,          //asi es como se mandan a llamar las variables
    user: process.env.CHAT_IA_DB_USER,          //de entorno del archivo .env
    password: process.env.CHAT_IA_DB_PASS,  
    database: process.env.CHAT_IA_DB_NAME,
    port: Number(process.env.CHAT_IA_DB_PORT),
    waitForConnections: true,
});

export default connection;
