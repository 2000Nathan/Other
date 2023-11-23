import Strategy  from "passport-local";
import passport from "passport";
import { getUserUtils } from "../serviceLocator/composer";
//import CryptoJS from "crypto-js";

passport.use(
    "local",
    new Strategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        async (req, email, passport, done)=>{
            //Validacion de usuario
            const userUtil = getUserUtils();
            const user = await userUtil.getUserByEmail(email);
            if(typeof user !== "object"){
                return done(" email o password incorrectos");
            }
            //const {password } = user;

            


        }
    )
)