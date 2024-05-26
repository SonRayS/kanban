import { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";

const useTheme = () => {
    const themeValue = useContext(themeContext);
    return themeValue;
};

export default useTheme;
