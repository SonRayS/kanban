import { useState, useLayoutEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("true");

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return { theme, setTheme };
};

export default useTheme;
