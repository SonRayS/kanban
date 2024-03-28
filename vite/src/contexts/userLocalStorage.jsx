import { createContext, useState } from "react";

function getUserFromLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem("userKey"));
    } catch (console) {
        console.log(error, "Data = null");
        return null;
    }
}

export const UserContext = createContext(null);

export function useUserContext(children) {
    const [user, setUser] = useState(getUserFromLocalStorage());

    function login({ newUser }) {
        setUser(newUser);
        localStorage.setItem("userKey", JSON.stringify(newUser));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("userKey");
    }

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}
/* const user = useUserContext(UserContext);

if (!user) {
    throw new Error("Данные пользователя не были найдены");
}

return user; */
