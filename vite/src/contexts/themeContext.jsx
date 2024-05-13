import { createContext, useState, useLayoutEffect } from "react";

export const themeContext = createContext(null);
const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "false" : "true";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("app-theme") || defaultTheme);
    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme]);
    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};
