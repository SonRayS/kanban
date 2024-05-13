import { createContext, useState, useEffect } from "react";

export const themeContext = createContext(null);
const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "false" : "true";

const setThemeAttribute = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("app-theme") || defaultTheme);

    const toggleTheme = () => {
        const nextTheme = theme === "true" ? "false" : "true";
        setThemeAttribute(nextTheme);
        setTheme(nextTheme);
    };

    useEffect(() => {
        setThemeAttribute(localStorage.getItem("app-theme") || defaultTheme);
    }, []);

    return <themeContext.Provider value={{ theme, toggleTheme }}>{children}</themeContext.Provider>;
};
