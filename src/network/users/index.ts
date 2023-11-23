/* contiene urls finales de cada endpoint */
import  express, { Request, Response}  from "express";
import Controller from '../../controllers/users'

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

//se crea un endpoint que recibe un email y retorna un mensaje con el email del usuario 
router.get('/', getUserByEmail);

//se exporta el objeto router
export default router;
