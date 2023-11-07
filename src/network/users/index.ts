/* contiene urls finales de cada endpoint */
import  express, { Request, Response}  from "express";

//se crea un objeto router que contiene las rutas de los endpoints 
const router = express.Router();

//se crea un metodo getUserByEmail que recibe un request y un response y retorna un mensaje con el email del usuario 
function getUserByEmail(req: Request, res: Response) {
    const { email } = req.params;
    res.send(`User with email ${email}`)
}

//se crea un endpoint que recibe un email y retorna un mensaje con el email del usuario 
router.get('/', getUserByEmail);

//se exporta el objeto router
export default router;
