import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
}

