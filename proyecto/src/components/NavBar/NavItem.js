import { NavLink } from "react-router-dom";

const NavItem = () => {
    return <>
    <NavLink to={`/category/general`} className="navbar-item">Limpieza General</NavLink>
    <NavLink to={`/category/cocina`} className="navbar-item">Productos de Cocina</NavLink>
</>
}

export default NavItem;