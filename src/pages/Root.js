import { Link, Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

const RootLayout = (props) => {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default RootLayout;