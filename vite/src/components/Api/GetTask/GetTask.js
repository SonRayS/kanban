export const UserTask = "https://wedev-api.sky.pro/api/kanban";

export async function getTask({ token }) {
    const response = await fetch(UserTask, {
        headers: {
            Authorization: `Token: ${token}`,
        },
    });

    const data = await response.json();
    return data;
}
