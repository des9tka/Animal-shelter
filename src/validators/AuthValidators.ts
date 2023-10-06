import * as Yup from "yup";

const LoginYupValidator = Yup.object({
    email: Yup.string()
        .max(50, "No max than 50 symbols!")
        .min(15, "No less than 15 symbols!")
        .required("Email is Required!"),

    password: Yup.string()
        .max(20, "No max than 20 symbols!")
        .min(4, "No less than 4 symbols!")
        .required("Password is Required!"),
});

const RegisterYupValidator = Yup.object({
    email: Yup.string()
        .max(50, "No max than 50 symbols!")
        .min(15, "No less than 15 symbols!")
        .required("Email is Required!"),

    password: Yup.string()
        .max(20, "No max than 20 symbols!")
        .min(4, "No less than 4 symbols!")
        .required("Password is Required!"),
        
    name: Yup.string().min(3).max(20).required("Name is Required!"),

    surname: Yup.string().min(3).max(20).required("Surname is Required!"),

    age: Yup.number().min(18).required("Age is Required!"),
});

export { LoginYupValidator, RegisterYupValidator };
