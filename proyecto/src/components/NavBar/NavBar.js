import NavItem from "./NavItem";
import Logo from "./Logo"
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <Logo/>
                    <h1 className="titulo">Clean Barton</h1>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
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