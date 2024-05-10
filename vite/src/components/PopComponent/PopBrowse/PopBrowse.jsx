import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import { useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as B from "./PopBrowse.style";
import { useState } from "react";
import { useUser } from "../../Hooks/useUser";
import { DeleteTask } from "../../Api/DeleteTask/DeleteTask";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../../contexts/useUser";

function PopBrowse() {
    const { id } = useParams();
    const { user } = useUser();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);

    /* -----------------------------------------------CARD----------------------------- */
    const { cards } = useTaskContext();
    const currentCard = cards.find((element) => id === element._id);
    /* -----------------------------------------------CARD----------------------------- */

    const DeleteTasks = () => {
        console.log("1");
        DeleteTask({ taskData, id, token: user.token })
            .then((response) => {
                setCards(response.tasks);
                console.log(response);
                navigate(AppRoutes.PAGE_MAIN);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
                navigate(AppRoutes.PAGE_NOT_FOUND);
            });
    };

    return (
        <B.PopBrowse id="popBrowse">
            <B.PopBrowse__container>
                <B.PopBrowse__block>
                    <B.PopBrowse__content>
                        <B.PopBrowse__topBlock>
                            <B.PopBrowse__ttl>Название задачи:{currentCard.title}</B.PopBrowse__ttl>
                            <B.PopBrowse__color $topicColor={"_orange"}>
                                <p>Web Design</p>
                            </B.PopBrowse__color>
                        </B.PopBrowse__topBlock>
                        <B.PopBrowse__status>
                            <B.PopBrowse__subTtl>Статус</B.PopBrowse__subTtl>
                            <B.PopBrowse__statusThemes>
                                <B.PopBrowse__hide>
                                    <p>Без статуса</p>
                                </B.PopBrowse__hide>
                                <B.PopBrowse__statusTheme $topicColor={"_gray"}>
                                    <p>Нужно сделать</p>
                                </B.PopBrowse__statusTheme>
                                <B.PopBrowse__hide>
                                    <p>В работе</p>
                                </B.PopBrowse__hide>
                                <B.PopBrowse__hide>
                                    <p>Тестирование</p>
                                </B.PopBrowse__hide>
                                <B.PopBrowse__hide>
                                    <p>Готово</p>
                                </B.PopBrowse__hide>
                            </B.PopBrowse__statusThemes>
                        </B.PopBrowse__status>
                        <B.PopBrowse__wrap>
                            <B.PopBrowse__form
                                id="formBrowseCard"
                                action="#"
                            >
                                <B.PopBrowse__formBrowseBlock>
                                    <B.PopBrowse__subLabelTtl htmlFor="textArea01">
                                        Описание задачи
                                    </B.PopBrowse__subLabelTtl>
                                    <B.PopBrowse__area
                                        name="text"
                                        id="textArea01"
                                        readOnly
                                        placeholder="Введите описание задачи..."
                                    ></B.PopBrowse__area>
                                </B.PopBrowse__formBrowseBlock>
                            </B.PopBrowse__form>
                            {/* ------------CALENDAR----------- */}
                            <Calendar
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                            />
                            {/* ------------CALENDAR----------- */}
                        </B.PopBrowse__wrap>
                        <B.PopBrowse__themeDown>
                            <B.PopBrowse__categoriesSubTtl>Категория</B.PopBrowse__categoriesSubTtl>
                            <B.PopBrowse__categoriesTheme $topicColor={"_orange"}>
                                <p>Web Design</p>
                            </B.PopBrowse__categoriesTheme>
                        </B.PopBrowse__themeDown>
                        <B.PopBrowse__btnBrowse>
                            <B.PopBrowse__btnGroup>
                                <B.PopBrowse__edit $HoverNumber={"hover03"}>
                                    <a>Редактировать задачу</a>
                                </B.PopBrowse__edit>
                                <B.PopBrowse__delete
                                    $HoverNumber={"hover03"}
                                    onClick={DeleteTasks}
                                >
                                    <a>Удалить задачу</a>
                                </B.PopBrowse__delete>
                            </B.PopBrowse__btnGroup>
                            <Link to={AppRoutes.PAGE_MAIN}>
                                <B.PopBrowse__close $HoverNumber={"hover01"}>Закрыть</B.PopBrowse__close>
                            </Link>
                        </B.PopBrowse__btnBrowse>
                        <B.PopBrowse__btnHide>
                            <B.PopBrowse__btnGroup>
                                <B.PopBrowse__saveEdit $HoverNumber={"hover01"}>
                                    <a>Сохранить</a>
                                </B.PopBrowse__saveEdit>
                                <B.PopBrowse__edit $HoverNumber={"hover03"}>
                                    <a>Отменить</a>
                                </B.PopBrowse__edit>
                                <B.PopBrowse__edit
                                    id="btnDelete"
                                    $HoverNumber={"hover03"}
                                    /*    onClick={DeleteTasks} */
                                >
                                    <a>Удалить задачу</a>
                                </B.PopBrowse__edit>
                            </B.PopBrowse__btnGroup>
                            <B.PopBrowse__saveEdit $HoverNumber={"hover03"}>Закрыть</B.PopBrowse__saveEdit>
                        </B.PopBrowse__btnHide>
                    </B.PopBrowse__content>
                </B.PopBrowse__block>
            </B.PopBrowse__container>
        </B.PopBrowse>
    );
}

export default PopBrowse;
