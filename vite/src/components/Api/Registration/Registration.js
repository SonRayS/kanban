import { UserHost } from "../AuthorUser/AuthorUser";
import RegResponse from "./Response/RegistrationResponseApi";

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
            const status = response.status;
            RegResponse({ status });
            throw new Error();
        } else if (response.status === 201) {
            const status = response.status;
            RegResponse({ status });
        }
        return console.log(response), response.json();
    });
}
