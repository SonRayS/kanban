import { UserHost } from "../AuthorUser/AuthorUser";
import { AppRoutes } from "../../AppRoutes/AppRoutes";

export async function UserRegistration({ name, login, password }) {
    await fetch(UserHost, {
        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            alert("Такой аккаунт уже есть!");
            throw new Error();
        } else if (response.status === 201) {
            alert("Ваш аккаунт успешно создан!");
            window.location.assign(AppRoutes.PAGE_AUTHORIZATION);
        }
        return response.json();
    });
}
