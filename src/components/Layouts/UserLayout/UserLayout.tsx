import { Outlet } from "react-router-dom";
import { UserHeader } from "../../Header";

const UserLayout = () => {

    return (
        <div>
            <UserHeader/>
            UserLayout
            <Outlet/>
        </div>
    )
}
export {UserLayout};
