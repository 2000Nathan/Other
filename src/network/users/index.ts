/* contiene urls finales de cada endpoint */
import  express, { Request, Response}  from "express";
import Controller from '../../controllers/users'
import { body } from "express-validator"
import log4js from "../../utils/logger";
import { log } from "console";
import { error } from "../../utils/logger";

//se crea un objeto router que contiene las rutas de los endpoints 
const router = express.Router();

function getUserByEmail(req: Request, res: Response) {
    const { email } = req.query;
     Controller.getUserByEmail(email.toString())
     .then((result) => res.send(result))
     .catch((error) => {res.send(error)
        console.log(error)
    
    });
}

function newUser(req: Request, res: Response) {
    const {
        names,
        lastNames,
        email,
        password
     }= req.body;
     Controller.newUser({
        names,
        lastNames,
        email,
        password
     })
        .then((result) => error(result, res)) 
        .catch((error) => res.status(500).send(error.message));
    
}

//se crea un endpoint que recibe un email y retorna un mensaje con el email del usuario 
router.get('/', getUserByEmail);
router.post("/",body("names", "Field Names is required must be string").isString().not().isEmpty(), newUser)

//se exporta el objeto router
export default router;
