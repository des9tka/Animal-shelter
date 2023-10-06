interface LoginDataInterface {
    email: string;
    password: string;
}

interface RegisterDataInterface {
    email: string;
    password: string;
    name: string,
    surname: string,
    age: number
}

export type { LoginDataInterface, RegisterDataInterface };
