import { UserHost } from "../AuthorUser/AuthorUser";

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
            alert("Пользователь с таким логином уже сущетсвует");
            throw new Error();
        } else if (response.status === 201) {
            alert("Аккаунт создан");
        }
        return console.log(response), response.json();
    });
}
