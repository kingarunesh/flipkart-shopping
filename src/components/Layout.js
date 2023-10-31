import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Products from "./Products";

export default function Layout() {
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="container">
                <Navbar query={query} setQuery={setQuery} />

                <Sidebar />

                <Products query={query} setQuery={setQuery} />
            </div>
        </>
    );
}
