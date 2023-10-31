import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function Layout() {
    return (
        <>
            <div className="container">
                <Navbar />

                <Sidebar />

                <Home />
            </div>
        </>
    );
}
