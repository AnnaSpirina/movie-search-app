import { Link, NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { useFavorites } from "../../hooks/useFavorites";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../UI/ThemeToggle";
import styles from './Header.module.css';

function Header(){
    const { favorites } = useFavorites();
    const { theme } = useTheme();

    const getClassNavLink = ({ isActive }) => {
        return isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink
    }

    return (
        <header>
            <Link to="/">
                <img src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"} alt="КиноГид" className={styles.logo} />
            </Link>
            <SearchBar />
            <div className={styles.headerActions}>
                <nav className={styles.headerLinks}>
                    <NavLink
                        to="/"
                        className={getClassNavLink}
                    >
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive ? "/images/house-purple.svg" : "/images/house-gray.svg"}
                                    alt=""
                                />
                                Главная
                            </>
                        )}
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={getClassNavLink}
                    >
                        {({ isActive }) => (
                            <>
                                <img
                                    src={isActive ? "/images/heart-header-purple.svg" : "/images/heart-header-gray.svg"}
                                    alt=""
                                />
                                Избранное <span className={styles.countFavorites}>{favorites.length}</span>
                            </>
                        )}
                    </NavLink>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;