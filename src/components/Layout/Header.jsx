import { Link, NavLink } from "react-router-dom";

function Header(){
    return (
        <header>
            <Link to="/">
                <img src="/logo_dark.png" alt="КиноГид" className="logo" />
            </Link>
            <nav className="header-links">
                <NavLink to="/">
                    Главная
                </NavLink>
                <NavLink to="/favorites">
                    Избранное
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;