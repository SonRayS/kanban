/* import { UserTask } from "../GetTask/GetTask";

export async function AddTask(taskData, id) {
    const response = await fetch(UserTask + "/" + id, {
        headers: {
            Authorization: `Bearer ${taskData.token}`,
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
} */
