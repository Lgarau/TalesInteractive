import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
}

