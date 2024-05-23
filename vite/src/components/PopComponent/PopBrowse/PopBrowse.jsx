import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import { useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as B from "./PopBrowse.style";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/useUser";
import { DeleteTask } from "../../Api/DeleteTask/DeleteTask";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../../../contexts/useUser";
import useTheme from "../../Hooks/useTheme";
import { topicName } from "../../CardForm/CardForm.style";

function PopBrowse() {
    const { id } = useParams();
    const { user } = useUserContext();
    const { setCards } = useTaskContext();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [isEdited, setIsEdited] = useState(false);

    const { theme, toggleTheme } = useTheme();

    /* -----------------------------------------------CARD----------------------------- */
    const { cards } = useTaskContext();
    const currentCard = cards.find((element) => id === element._id);

    /* -----------------------------------------------CARD----------------------------- */
    /* useEffect(() => {
        console.log(currentCard);
    }, []); */

    const isOpenMenu = () => {
        setIsEdited((prevState) => !prevState);
    };

    const DeleteTasks = async (e) => {
        await DeleteTask({ taskData: currentCard, id, token: user.token })
            .then((response) => {
                console.log(response);
                navigate(AppRoutes.PAGE_MAIN);
                location.reload();
            })
            .catch((error) => {
                console.log(error);
                alert(error);
                navigate(AppRoutes.PAGE_NOT_FOUND);
            });
    };

    const [editTask, setEditTask] = useState({
        title: currentCard?.title,
        description: currentCard?.description,
        topic: currentCard?.topic,
        status: currentCard?.status,
        date: currentCard?.date,
    });
    console.log(editTask);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditTask({
            ...editTask,
            [name]: value,
        });
    };

    return (
        <>
            <B.PopBrowse id="popBrowse">
                <B.PopBrowse__container>
                    <B.PopBrowse__block $Theme={theme}>
                        <B.PopBrowse__content>
                            <B.PopBrowse__topBlock>
                                <B.PopBrowse__ttl $Theme={theme}>Название задачи:{currentCard.title}</B.PopBrowse__ttl>
                                <B.PopBrowse__color $topicColor={topicName[currentCard.topic]}>
                                    <p>{currentCard.topic}</p>
                                </B.PopBrowse__color>
                            </B.PopBrowse__topBlock>
                            <B.PopBrowse__status>
                                <B.PopBrowse__subTtl $Theme={theme}>Статус</B.PopBrowse__subTtl>
                                {isEdited && (
                                    <B.RadioToolBar>
                                        <B.RadioInput
                                            type="radio"
                                            id="radio1"
                                            name="status"
                                            value="Без статуса"
                                            onChange={handleInputChange}
                                        />
                                        <B.StatusThemeLabel
                                            htmlFor="radio1"
                                            $Theme={theme}
                                        >
                                            Без статуса
                                        </B.StatusThemeLabel>

                                        <B.RadioInput
                                            type="radio"
                                            id="radio2"
                                            name="status"
                                            value="Нужно сделать"
                                            onChange={handleInputChange}
                                        />
                                        <B.StatusThemeLabel
                                            htmlFor="radio2"
                                            $Theme={theme}
                                        >
                                            Нужно сделать
                                        </B.StatusThemeLabel>

                                        <B.RadioInput
                                            type="radio"
                                            id="radio3"
                                            name="status"
                                            value="В работе"
                                            onChange={handleInputChange}
                                        />
                                        <B.StatusThemeLabel
                                            htmlFor="radio3"
                                            $Theme={theme}
                                        >
                                            В работе
                                        </B.StatusThemeLabel>

                                        <B.RadioInput
                                            type="radio"
                                            id="radio4"
                                            name="status"
                                            value="Тестирование"
                                            onChange={handleInputChange}
                                        />
                                        <B.StatusThemeLabel
                                            htmlFor="radio4"
                                            $Theme={theme}
                                        >
                                            Тестирование
                                        </B.StatusThemeLabel>

                                        <B.RadioInput
                                            type="radio"
                                            id="radio5"
                                            name="status"
                                            value="Готово"
                                            onChange={handleInputChange}
                                        />
                                        <B.StatusThemeLabel
                                            htmlFor="radio5"
                                            $Theme={theme}
                                        >
                                            Готово
                                        </B.StatusThemeLabel>
                                    </B.RadioToolBar>
                                )}

                                {!isEdited && (
                                    <B.PopBrowse__statusThemes>
                                        <B.PopBrowse__statusTheme $topicColor={"_gray"}>
                                            <p>{currentCard.status}</p>
                                        </B.PopBrowse__statusTheme>
                                    </B.PopBrowse__statusThemes>
                                )}
                            </B.PopBrowse__status>
                            <B.PopBrowse__wrap>
                                <B.PopBrowse__form
                                    id="formBrowseCard"
                                    action="#"
                                >
                                    <B.PopBrowse__formBrowseBlock>
                                        <B.PopBrowse__subLabelTtl
                                            htmlFor="textArea01"
                                            $Theme={theme}
                                        >
                                            Описание задачи
                                        </B.PopBrowse__subLabelTtl>
                                        {!isEdited && (
                                            <>
                                                <B.PopBrowse__area
                                                    onChange={handleInputChange}
                                                    $Theme={theme}
                                                    name="description"
                                                    id="textArea01"
                                                    readOnly=""
                                                    placeholder="Введите описание задачи..."
                                                    defaultValue={currentCard.description}
                                                    disabled={true}
                                                ></B.PopBrowse__area>
                                            </>
                                        )}
                                        {isEdited && (
                                            <>
                                                <B.PopBrowse__area
                                                    onChange={handleInputChange}
                                                    $Theme={theme}
                                                    name="description"
                                                    id="textArea01"
                                                    placeholder="Описание задачи..."
                                                    defaultValue={currentCard.description}
                                                    disabled={false}
                                                ></B.PopBrowse__area>
                                            </>
                                        )}
                                    </B.PopBrowse__formBrowseBlock>
                                </B.PopBrowse__form>
                                {/* ------------CALENDAR----------- */}
                                <Calendar
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate}
                                />
                                {/* ------------CALENDAR----------- */}
                            </B.PopBrowse__wrap>
                            {!isEdited && (
                                <>
                                    <B.PopBrowse__themeDown>
                                        <B.PopBrowse__categoriesSubTtl $Theme={theme}>
                                            Категория
                                        </B.PopBrowse__categoriesSubTtl>
                                        <B.PopBrowse__categoriesTheme
                                            $topicColor={topicName[currentCard.topic.replaceAll(" ", "")]}
                                        >
                                            <p>{currentCard.topic}</p>
                                        </B.PopBrowse__categoriesTheme>
                                    </B.PopBrowse__themeDown>
                                    <B.PopBrowse__btnBrowse>
                                        <B.PopBrowse__btnGroup>
                                            <B.PopBrowse__edit
                                                $Theme={theme}
                                                $HoverNumber={"hover03"}
                                                onClick={isOpenMenu}
                                            >
                                                Редактировать задачу
                                            </B.PopBrowse__edit>
                                            <B.PopBrowse__delete
                                                $HoverNumber={"hover03"}
                                                $Theme={theme}
                                                onClick={DeleteTasks}
                                            >
                                                Удалить задачу
                                            </B.PopBrowse__delete>
                                        </B.PopBrowse__btnGroup>
                                        <Link to={AppRoutes.PAGE_MAIN}>
                                            <B.PopBrowse__close $HoverNumber={"hover01"}>Закрыть</B.PopBrowse__close>
                                        </Link>
                                    </B.PopBrowse__btnBrowse>
                                </>
                            )}
                            {isEdited && (
                                <B.PopBrowse__btnBrowse>
                                    <B.PopBrowse__btnGroup>
                                        <B.PopBrowse__saveEdit $HoverNumber={"hover01"}>
                                            Сохранить
                                        </B.PopBrowse__saveEdit>
                                        <B.PopBrowse__edit
                                            $Theme={theme}
                                            $HoverNumber={"hover03"}
                                            onClick={isOpenMenu}
                                        >
                                            Отменить
                                        </B.PopBrowse__edit>
                                        <B.PopBrowse__delete
                                            $HoverNumber={"hover03"}
                                            $Theme={theme}
                                            onClick={DeleteTasks}
                                        >
                                            Удалить задачу
                                        </B.PopBrowse__delete>
                                    </B.PopBrowse__btnGroup>
                                    <Link to={AppRoutes.PAGE_MAIN}>
                                        <B.PopBrowse__close $HoverNumber={"hover01"}>Закрыть</B.PopBrowse__close>
                                    </Link>
                                </B.PopBrowse__btnBrowse>
                            )}
                        </B.PopBrowse__content>
                    </B.PopBrowse__block>
                </B.PopBrowse__container>
            </B.PopBrowse>
        </>
    );
}

export default PopBrowse;
