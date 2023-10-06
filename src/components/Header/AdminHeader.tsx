import {FC} from "react";
import {Link} from "react-router-dom";

const AdminHeader: FC = () => {
    return (
        <div>
            <Link to={"/admin"}>Home</Link>
            <Link to={"/admin/user_validate"}>Validate Users</Link>
            <Link to={"/admin/animal_validate"}>Validate Animals</Link>
            <Link to={"/auth/login"}>Exit</Link>
        </div>
    );
};
export { AdminHeader };
