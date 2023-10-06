import { useFormik } from "formik";
import { FC, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";

//name, surname, age, NYC documents


const ProfilePage: FC = () => {

    //const user = useSelector(user => useReducer)

    const initialValue = {
        phone: '',
        email: ''
    }

    useEffect(() => {
        //funcGet email and phone.
    }, [])

    // useFormik({
    //     initialValues: initialValue,

    // })

    return (
        <form className="">
            <label htmlFor="phone-input">Phone</label>
            <input type="phone" id="phone-input"/>

            <label htmlFor="email-input">Email</label>
            <input type="email" id="email-input"/>

            <button type="submit">Change</button>
        </form>
    );
};

export { ProfilePage };
