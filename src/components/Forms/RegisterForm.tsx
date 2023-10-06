import { FC } from "react";
import { useFormik } from "formik";

import { RegisterDataInterface } from "../../interfaces";
import { RegisterYupValidator } from "../../validators";

const initialValue: RegisterDataInterface = {
    email: "",
    password: "",
    name: "",
    surname: "",
    age: 18,
};

const dataSubmit = (data: RegisterDataInterface): void => {
    console.log(data);
};

const RegisterForm: FC = () => {
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: RegisterYupValidator,
        onSubmit: dataSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email"></label>
            <input type="email" id="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
                <h2>{formik.errors.email}</h2>
            ) : null}

            <label htmlFor="password"></label>
            <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
                <h2>{formik.errors.password}</h2>
            ) : null}

            <label htmlFor="name"></label>
            <input type="text" id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
                <h2>{formik.errors.name}</h2>
            ) : null}

            <label htmlFor="surname"></label>
            <input
                type="text"
                id="surname"
                {...formik.getFieldProps("surname")}
            />
            {formik.touched.surname && formik.errors.surname ? (
                <h2>{formik.errors.surname}</h2>
            ) : null}

            <label htmlFor="age"></label>
            <input type="number" id="age" {...formik.getFieldProps("age")} />
            {formik.touched.age && formik.errors.age ? (
                <h2>{formik.errors.age}</h2>
            ) : null}

            <button type="submit" id="submit-btn">
                Register
            </button>
        </form>
    );
};

export { RegisterForm };
