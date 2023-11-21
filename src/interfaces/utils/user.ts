import { NewuserFields } from "../../interfaces";


export interface UserUtilsInterface {
    getUserByEmail(email: string): Promise<NewuserFields | string>
    getUser(): Promise<any> 
}