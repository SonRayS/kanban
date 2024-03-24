import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";
export const UserTask = "https://wedev-api.sky.pro/api/kanban";

export async function getTask({ token }) {
    const response = await fetch(UserTask, {
        headers: {
            Authorization: `Token: ${token}`,
        },
    }).then((response) => {
        if (response.status === 400) {
            const out = "Произошла ошибка, пожалуйста попробуйте позже...";
            NotFoundPage({ out });
            throw new Error();
        }
        return response;
    });

    const data = await response.json();
    return data;
}
