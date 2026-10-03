import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const year = new Date().getFullYear();

function Footer() {
    const { theme } = useTheme();

    return (
        <footer>
            <Link to="/">
                <img src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"} alt="КиноГид" className={styles.logo} />
            </Link>
            <nav className={styles.footerLinks} aria-label="Ссылки в подвале">
                <a href="https://github.com/AnnaSpirina/movie-search-app/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                    О приложении
                </a>
                <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
                    API
                </a>
                <a href="https://github.com/AnnaSpirina/" target="_blank" rel="noopener noreferrer">
                    Контакты
                </a>
            </nav>
            <span className={styles.copyright}>&copy; {year} КиноГид</span>
        </footer>
    );
}

export default Footer;