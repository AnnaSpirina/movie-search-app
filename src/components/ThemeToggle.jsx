import { useTheme } from "../hooks/useTheme";
import styles from "./ThemeToggle.module.css"

function ThemeToggle(){
    const { theme, toggleTheme } = useTheme();

    return (
        <button type="button" aria-label={theme === "dark" ? "Включить светлую тему" : "Включить темную тему"} className={styles.themeToggle} onClick={toggleTheme}>
            <div className={`${styles.optionThemeToggle} ${theme === "dark" ? styles.active : ""}`}>
                <img alt="" src={`/images/${theme === "dark" ? "moon-white" : "moon-gray"}.svg`} />
            </div>
            <div className={`${styles.optionThemeToggle} ${theme === "light" ? styles.active : ""}`}>
                <img alt="" src={`/images/${theme === "light" ? "sun-white" : "sun-gray"}.svg`} />
            </div>
        </button>
    )
}

export default ThemeToggle;