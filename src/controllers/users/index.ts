import { NewuserFields } from "../../interfaces";
import { getUserUtils } from "../../services/serviceLocator/composer";


function getUserByEmail(email: string): Promise<NewuserFields | string> {
    const userUtils = getUserUtils();
    return userUtils.getUserByEmail(email);
}

export default {
    getUserByEmail
}