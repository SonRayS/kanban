import { useContext } from "react";
import { UserContext } from "../../contexts/userLocalStorage";

export function useUser() {
    return useContext(UserContext);
}
