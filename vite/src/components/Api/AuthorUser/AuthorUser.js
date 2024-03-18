export const UserHost = "https://wedev-api.sky.pro/api/user/login";

export function AuthorUser({ login, password }) {
    return fetch(UserHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            alert("Неправильный логин или пароль");
            throw new Error("Error");
        }
        return response.json();
    });
}
