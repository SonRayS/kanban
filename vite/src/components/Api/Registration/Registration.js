import { UserHost } from "../AuthorUser/AuthorUser";

export function UserRegistration({ name, login, password }) {
    fetch(UserHost, {
        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error(Error, "Такой аккаунт уже есть!");
        }
        return response.json();
    });
}
