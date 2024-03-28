import { UserHost } from "../AuthorUser/AuthorUser";

export async function UserRegistration({ name, login, password }) {
    const response = await fetch(UserHost, {
        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    });
    if (response.status === 400) {
        throw new Error("Такой аккаунт уже есть!");
    }
    const user = await response.json();
    return user;
}
