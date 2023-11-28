import { NewuserFields } from "../../interfaces";
import { NewUserRegister } from "../";


export interface UserUtilsInterface {
    getUserByEmail(email: string): Promise<NewuserFields | string>
    getUser(): Promise<any>;
    newUser(params: NewUserRegister): Promise<any>;
}