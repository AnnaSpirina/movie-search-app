import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { THEME_STORAGE_KEY } from "../../utils/constants";

function loadTheme(){
    const themeLocalStorage = localStorage.getItem(THEME_STORAGE_KEY);
    return themeLocalStorage === "light" ? "light" : "dark";
}

export function ThemeProvider({children}){
    const [theme, setTheme] = useState(loadTheme);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}