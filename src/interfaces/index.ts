enum genderTypes {
    m = 'masculino',
    f = 'femenino',
    ne = 'no especificado'
}

export interface NewuserFields {

    names: string;
    lastnames: string;
    age: number;
    gender: genderTypes;
    email: string;
    isVerified: boolean;
    photo?: string;
    phone?: {
        phoneCode: string;
        phoneNumber: string;
        iso: string;

    }| null;
}

export type NewUserRegister = {
    names: string;
    lastNames: string;
    password: string;
    email: string;
}