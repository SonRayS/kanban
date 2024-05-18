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

    const { theme, toggleTheme } = useTheme();

    /* -----------------------------------------------CARD----------------------------- */
    const { cards } = useTaskContext();
    const currentCard = cards.find((element) => id === element._id);

    /* -----------------------------------------------CARD----------------------------- */
    useEffect(() => {
        console.log(currentCard);
    }, []);

    const DeleteTasks = () => {
        DeleteTask({ taskData: currentCard, id, token: user.token })
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

    return (
        <>
            {currentCard ? (
                <B.PopBrowse id="popBrowse">
                    <B.PopBrowse__container>
                        <B.PopBrowse__block $Theme={theme}>
                            <B.PopBrowse__content>
                                <B.PopBrowse__topBlock>
                                    <B.PopBrowse__ttl $Theme={theme}>
                                        Название задачи:{currentCard.title}
                                    </B.PopBrowse__ttl>
                                    <B.PopBrowse__color $topicColor={topicName[currentCard.topic]}>
                                        <p>{currentCard.topic}</p>
                                    </B.PopBrowse__color>
                                </B.PopBrowse__topBlock>
                                <B.PopBrowse__status>
                                    <B.PopBrowse__subTtl $Theme={theme}>Статус</B.PopBrowse__subTtl>
                                    <B.PopBrowse__statusThemes>
                                        <B.PopBrowse__statusTheme $topicColor={"_gray"}>
                                            <p>{currentCard.status}</p>
                                        </B.PopBrowse__statusTheme>
                                    </B.PopBrowse__statusThemes>
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

                                            <B.PopBrowse__area
                                                $Theme={theme}
                                                name="text"
                                                id="textArea01"
                                                readOnly
                                            >
                                                {currentCard.description}
                                            </B.PopBrowse__area>
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
                                    <B.PopBrowse__categoriesSubTtl $Theme={theme}>
                                        Категория
                                    </B.PopBrowse__categoriesSubTtl>
                                    <B.PopBrowse__categoriesTheme $topicColor={topicName[currentCard.topic]}>
                                        <p>{currentCard.topic}</p>
                                    </B.PopBrowse__categoriesTheme>
                                </B.PopBrowse__themeDown>
                                <B.PopBrowse__btnBrowse>
                                    <B.PopBrowse__btnGroup>
                                        <B.PopBrowse__edit
                                            $Theme={theme}
                                            $HoverNumber={"hover03"}
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
                                {/*<B.PopBrowse__btnHide>
                                    <B.PopBrowse__btnGroup>
                                        <B.PopBrowse__saveEdit $HoverNumber={"hover01"}>
                                            <a>Сохранить</a>
                                        </B.PopBrowse__saveEdit>
                                        <B.PopBrowse__edit $HoverNumber={"hover03"}>
                                            <a>Отменить</a>
                                        </B.PopBrowse__edit>
                                        <B.PopBrowse__edit
                                            $HoverNumber={"hover03"}
                                            id="btnDelete"
                                            onClick={DeleteTasks}
                                        >
                                            <a>Удалить задачу</a>
                                        </B.PopBrowse__edit>
                                    </B.PopBrowse__btnGroup>
                                    <B.PopBrowse__saveEdit $HoverNumber={"hover03"}>Закрыть</B.PopBrowse__saveEdit>
                                </B.PopBrowse__btnHide> */}
                            </B.PopBrowse__content>
                        </B.PopBrowse__block>
                    </B.PopBrowse__container>
                </B.PopBrowse>
            ) : (
                <Link to={AppRoutes.PAGE_MAIN}></Link>
            )}
        </>
    );
}

export default PopBrowse;
