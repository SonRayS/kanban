import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import { useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import * as B from "./PopBrowse.style";

function PopBrowse() {
    const { id } = useParams();
    return (
        <B.PopBrowse id="popBrowse">
            <B.PopBrowse__container>
                <B.PopBrowse__block>
                    <B.PopBrowse__content>
                        <B.PopBrowse__topBlock>
                            <B.PopBrowse__ttl>Название задачи:{id}</B.PopBrowse__ttl>
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
                            <Calendar />
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
                                <B.PopBrowse__delete $HoverNumber={"hover03"}>
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
                                    <a href="#">Сохранить</a>
                                </B.PopBrowse__saveEdit>
                                <B.PopBrowse__edit $HoverNumber={"hover03"}>
                                    <a href="#">Отменить</a>
                                </B.PopBrowse__edit>
                                <B.PopBrowse__edit
                                    id="btnDelete"
                                    $HoverNumber={"hover03"}
                                >
                                    <a href="#">Удалить задачу</a>
                                </B.PopBrowse__edit>
                            </B.PopBrowse__btnGroup>

                            <B.PopBrowse__saveEdit>Закрыть</B.PopBrowse__saveEdit>
                        </B.PopBrowse__btnHide>
                    </B.PopBrowse__content>
                </B.PopBrowse__block>
            </B.PopBrowse__container>
        </B.PopBrowse>
    );
}

export default PopBrowse;
