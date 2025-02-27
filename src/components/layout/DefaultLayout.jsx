import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main className="min-h-screen  text-white pb-30 px-5">

                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
}

