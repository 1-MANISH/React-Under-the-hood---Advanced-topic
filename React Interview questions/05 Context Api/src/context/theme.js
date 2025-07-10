
import { createContext,useContext } from "react";

export const ThemeContext = createContext({
        themeMode:"light",
        toggleThemeMode:(themeMode) => {}
});

export const ThemeContextProvider = ThemeContext.Provider

export const useTheme = () => useContext(ThemeContext)