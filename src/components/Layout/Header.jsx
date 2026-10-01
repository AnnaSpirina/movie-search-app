import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import { useFavorites } from "../../hooks/useFavorites";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../ThemeToggle";

function Header(){
    const { favorites } = useFavorites();
    const { theme } = useTheme();

    return (
        <header>
            <Link to="/">
                <img src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"} alt="КиноГид" className="logo" />
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
            <ThemeToggle />
        </header>
    );
}

export default Header;