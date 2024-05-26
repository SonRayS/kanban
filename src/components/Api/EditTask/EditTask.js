import { UserTask } from "../GetTask/GetTask";

export async function putTodo({ token, id, taskData }) {
    const response = await fetch(UserTask + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify(taskData),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}
