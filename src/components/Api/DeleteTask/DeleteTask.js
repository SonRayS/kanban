import { UserTask } from "../GetTask/GetTask";

export async function DeleteTask({ taskData, id, token }) {
    const response = await fetch(UserTask + "/" + id, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            title: taskData.title,
            topic: taskData.topic,
            status: taskData.status,
            description: taskData.description,
            date: taskData.date,
        }),
    });

    if (!response.status === 201) {
        throw new Error("error");
    }

    const data = await response.json();
    return data;
}
