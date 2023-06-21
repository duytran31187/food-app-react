import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import { useEffect } from "react";

const RootLayout = (props) => {
    //const navigation = useNavigation();
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }
        setTimeout(() => {
            submit(null, {action:'/logout', method: 'post'})
        }, 1*60*60*1000); // autolog out after 1 hour
    });
    return (
        <>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default RootLayout;