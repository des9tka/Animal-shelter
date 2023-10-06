import { useFormik } from "formik";
import { FC } from "react";

import { LoginYupValidator } from "../../validators";
import { LoginDataInterface } from "../../interfaces";

const initialValue = {
    email: "",
    password: "",
};

const dataSubmit = (data: LoginDataInterface): void => {
    console.log(data);
};

const LoginForm = () => {
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: LoginYupValidator,
        onSubmit: dataSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email-field">Email</label>
            <input
                id="email-field"
                type="email"
                {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
                <h2>{formik.errors.email}</h2>
            ) : null}

            <label htmlFor="password-field">Password</label>
            <input
                id="password-field"
                type="password"
                {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
                <h2>{formik.errors.password}</h2>
            ) : null}

            <button className="backdrop-blur-3xl" type="submit">Login</button>
        </form>
    );
};

export { LoginForm };
