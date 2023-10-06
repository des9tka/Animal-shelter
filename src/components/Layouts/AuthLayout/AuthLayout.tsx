import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <Link to={"login"}>
                <div>Sign in</div>
            </Link>
            <Link to={"register"}>
                <div>Sign up</div>
            </Link>
            <Outlet />
        </div>
    );
};
export { AuthLayout };
