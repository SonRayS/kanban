import { UserTask } from "../GetTask/GetTask";

export async function addTask({ token }) {
    const response = await fetch(UserTask, {
        headers: {
            Authorization: `Token: ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            text,
        }),
    });

    const data = await response.json();
    return data;
}
