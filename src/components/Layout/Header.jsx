import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import { useFavorites } from "../../hooks/useFavorites";

function Header(){
    const { favorites } = useFavorites();

    return (
        <header>
            <Link to="/">
                <img src="/logo_dark.png" alt="КиноГид" className="logo" />
            </Link>
            <SearchBar />
            <nav className="header-links">
                <NavLink to="/">
                    Главная
                </NavLink>
                <NavLink to="/favorites">
                    Избранное <span>{favorites.length}</span>
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;