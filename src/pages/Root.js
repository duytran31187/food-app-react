import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

const RootLayout = (props) => {
    const navigation = useNavigation();
    return (
        <>
            {navigation.state === 'loading' && <p>Loading...</p>}
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default RootLayout;