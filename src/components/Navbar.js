import { useState } from "react";

export default function Navbar({ query, setQuery }) {
    const [hoverMenu, setHoverMenu] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const [showCart, setShowCart] = useState(false);

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
                        <li className="cart__conatiner">
                            <div className="cart__conatiner--title">
                                Cart <span className="material-symbols-outlined">expand_more</span>
                            </div>

                            {showCart && (
                                <div className="cart__conatiner--content">
                                    <ul>
                                        {/*  */}
                                        <li>
                                            <img
                                                src="https://images.unsplash.com/photo-1698694840029-a8ff76ba8bb4?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="hello"
                                            />

                                            <div>
                                                <h3>Samsung Galaxy s7</h3>

                                                <div>
                                                    <div>
                                                        <strong>Price:</strong> <span>899$</span>
                                                    </div>

                                                    <button className="removeCart">
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        {/*  */}

                                        <li>
                                            <img
                                                src="https://images.unsplash.com/photo-1698694840029-a8ff76ba8bb4?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="hello"
                                            />

                                            <div>
                                                <h3>Samsung Galaxy s7</h3>

                                                <div>
                                                    <div>
                                                        <strong>Price:</strong> <span>899$</span>
                                                    </div>

                                                    <button className="removeCart">
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <img
                                                src="https://images.unsplash.com/photo-1698694840029-a8ff76ba8bb4?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="hello"
                                            />

                                            <div>
                                                <h3>Samsung Galaxy s7</h3>

                                                <div>
                                                    <div>
                                                        <strong>Price:</strong> <span>899$</span>
                                                    </div>

                                                    <button className="removeCart">
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <img
                                                src="https://images.unsplash.com/photo-1698694840029-a8ff76ba8bb4?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="hello"
                                            />

                                            <div>
                                                <h3>Samsung Galaxy s7</h3>

                                                <div>
                                                    <div>
                                                        <strong>Price:</strong> <span>899$</span>
                                                    </div>

                                                    <button className="removeCart">
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        {/*  */}
                                    </ul>

                                    <div className="cart__conatiner--content--amount">
                                        Total Acount : <strong>500$</strong>
                                    </div>

                                    <button className="cart__conatiner--content--buy">buy now</button>
                                </div>
                            )}
                        </li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </nav>

            {showMenu && (
                <div className="container--header--hover_menu_container" onMouseLeave={leaveListHandler}>
                    <div className="container--header--hover_menu_container--box">
                        {/* NOTE :      fashion       */}
                        {hoverMenu === "fashion" && (
                            <ul>
                                <li>Shirt</li>
                                <li>Jeans</li>
                                <li>Shoes</li>
                                <li>Sleeper</li>
                                <li>Cap</li>
                                <li>Gloves</li>
                            </ul>
                        )}

                        {/* NOTE :      mobiels       */}
                        {hoverMenu === "mobiles" && (
                            <ul>
                                <li>Samsung</li>
                                <li>Realme</li>
                                <li>Oppo</li>
                                <li>Apple</li>
                                <li>Pixel</li>
                                <li>Nothing</li>
                            </ul>
                        )}

                        {/* NOTE :      travel       */}
                        {hoverMenu === "travel" && (
                            <ul>
                                <li>Bangalore</li>
                                <li>Delhi</li>
                                <li>Pune</li>
                                <li>Mumbai</li>
                                <li>Goa</li>
                            </ul>
                        )}

                        {/* NOTE :      food       */}
                        {hoverMenu === "food" && (
                            <ul>
                                <li>Pizza</li>
                                <li>Veg Meal</li>
                                <li>Non-Veg Meal</li>
                                <li>Burger</li>
                                <li>Mongo Juice</li>
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
