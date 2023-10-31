import { useState } from "react";

export default function Navbar() {
    const [query, setQuery] = useState("");

    const [hoverMenu, setHoverMenu] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    function listHandler(value) {
        setHoverMenu(value);
        setShowMenu(true);
    }

    function leaveListHandler() {
        setHoverMenu("");
        setShowMenu(false);
    }

    return (
        <header className="container--header">
            <nav className="container--header--menu">
                {/* NOTE :      product list       */}
                <div className="container--header--menu--left">
                    <ul>
                        <li onMouseEnter={() => listHandler("fashion")}>Fashion</li>

                        <li onMouseEnter={() => listHandler("mobiles")}>Mobiles</li>

                        <li onMouseEnter={() => listHandler("travel")}>Travel</li>

                        <li onMouseEnter={() => listHandler("food")}>Food</li>
                    </ul>
                </div>

                {/* NOTE :      serach       */}
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

                {/* NOTE :      account       */}
                <div className="container--header--menu--right">
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Cart</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </nav>

            {showMenu && (
                <div className="container--header--hover_menu_container" onMouseLeave={leaveListHandler}>
                    <div className="container--header--hover_menu_container--box">
                        <h2>{hoverMenu}</h2>
                    </div>
                </div>
            )}
        </header>
    );
}

// onMouseLeave = { leaveListHandler };
// onMouseLeave = { leaveListHandler };
// onMouseLeave = { leaveListHandler };
// onMouseLeave = { leaveListHandler };
