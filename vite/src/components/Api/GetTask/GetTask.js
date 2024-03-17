const UserTask = "https://wedev-api.sky.pro/api/kanban";

export async function getTask({ token }) {
    const response = await fetch(UserTask, {
        headers: {
            Authorization: `Token: ${token}`,
        },
    });

    const data = await response.json();
    return data;
}

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
