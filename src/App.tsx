import {Route, Routes} from "react-router-dom";

import {
    AdminLayout,
    AnimalValidatePage,
    AuthLayout,
    GetAnimalPage,
    GiveAnimalsPage,
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    UserLayout,
    UserValidatePage,
} from "./components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={"profile"} element={<ProfilePage />} />
                    <Route path={"animals"} element={<GetAnimalPage />}>
                        {/* <Route path={"give"} element={<GiveAnimalsPage />} /> */}
                        <Route path={"get"} element={<GiveAnimalsPage />} />
                    </Route>
                </Route>

                <Route path={"/admin"} element={<AdminLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={"animal_validate"} element={<AnimalValidatePage />}/>
                    <Route path={"user_validate"} element={<UserValidatePage />} />
                </Route>

                <Route path={"/auth"} element={<AuthLayout />}>
                    <Route path={"login"} element={<LoginPage />} />
                    <Route path={"register"} element={<RegisterPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
