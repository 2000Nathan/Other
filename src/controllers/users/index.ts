import { NewuserFields } from "../../interfaces";
import { getUserUtils } from "../../services/serviceLocator/composer";
import { NewUserRegister } from "../../interfaces";


function getUserByEmail(email: string): Promise<NewuserFields | string> {
    const userUtils = getUserUtils();
    return userUtils.getUserByEmail(email);
}

function newUser(params: NewUserRegister){
    const userUtils = getUserUtils();
    return userUtils.newUser(params);
    
}
export default {
    getUserByEmail,
    newUser
}