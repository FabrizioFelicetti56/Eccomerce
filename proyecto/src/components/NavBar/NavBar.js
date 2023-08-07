import NavItem from "./NavItem";
import Logo from "./Logo"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navi navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                <Logo/>
                    <Link to="/">
                        <h1 className="titulo">Clean Barton</h1>
                    </Link>
                </div>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavItem/>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar