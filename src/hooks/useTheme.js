import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

export function useTheme(){
    const context = useContext(ThemeContext);
    if (!context){
        throw new Error('useTheme нужно вызвать внутри ThemeProvider');
    }
    return context;
}