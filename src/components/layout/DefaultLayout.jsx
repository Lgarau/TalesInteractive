import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main className="min-h-screen">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </main>
            <FooterComponent />
        </>
    );
}

