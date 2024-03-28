import { createContext, useState } from "react";

function getUserFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
        console.log(error, "Data = null");
        return null;
    }
}

export const UserContext = createContext(null);

export function UseProvider({ children }) {
    const [user, setUser] = useState(getUserFromLocalStorage());

    function login(newUser) {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}
