import { useState } from "react";

export default function Navbar() {
    const [query, setQuery] = useState("");

    return (
        <header className="container--header">
            <nav className="container--header--menu">
                <div className="container--header--menu--left">
                    <ul>
                        <li>Fashion</li>
                        <li>Mobiles</li>
                        <li>Travel</li>
                        <li>Food</li>
                    </ul>
                </div>

                <div className="container--header--menu--center">
                    <div className="container--header--menu--center--search_icon">
                        <span className="material-symbols-outlined">search</span>
                    </div>

                    <form>
                        <input
                            type="text"
                            placeholder="Search for Products, Brands and More"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </form>
                </div>

                <div className="container--header--menu--right">
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Cart</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
