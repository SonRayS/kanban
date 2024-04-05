import { UserTask } from "../GetTask/GetTask";

export async function AddTask(taskData) {
    const response = await fetch(UserTask, {
        headers: {
            Authorization: `Bearer ${taskData.token}`,
        },
        method: "POST",
        body: JSON.stringify({
            title: taskData.title,
            topic: taskData.topic,
            status: taskData.status,
            description: taskData.description,
            date: taskData.date,
        }),
    });

    if (!response.status === 201) {
        alert("Заполните пустые строки");
        throw new Error("Ошибка отправки");
    }

    const data = await response.json();
    return data;
}
