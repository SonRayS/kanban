import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import * as N from "./PopNewCard.style";
import { PopBrowse__subLabelTtl } from "../PopBrowse/PopBrowse.style";

function PopNewCard() {
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        topic: "",
    });

    const handleFromSubmit = (e) => {
        e.preventDefault();
        console.log(newTask);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение target = DOM element

        setNewTask({
            ...newTask, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    return (
        <N.PopNewCard id="popNewCard">
            <N.PopNewCard__container>
                <N.PopNewCard__block>
                    <N.PopNewCard__content>
                        <N.PopNewCard__tll>Создание задачи</N.PopNewCard__tll>
                        <N.PopNewCard__close href="#">&#10006;</N.PopNewCard__close>
                        <N.PopNewCard__wrap>
                            <N.PopNewCard__form
                                id="formNewCard"
                                action="#"
                            >
                                <N.PopNewCard__nweBlock>
                                    <PopBrowse__subLabelTtl htmlFor="formTitle">Название задачи</PopBrowse__subLabelTtl>
                                    <N.PopNewCard__input
                                        value={newTask.title}
                                        onChange={handleInputChange}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                    />
                                </N.PopNewCard__nweBlock>
                                <N.PopNewCard__nweBlock>
                                    <PopBrowse__subLabelTtl htmlFor="textArea">Описание задачи</PopBrowse__subLabelTtl>
                                    <N.PopNewCard__area
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                    ></N.PopNewCard__area>
                                </N.PopNewCard__nweBlock>
                            </N.PopNewCard__form>

                            {/* ------------CALENDAR----------- */}
                            <Calendar />
                            {/* ------------CALENDAR----------- */}
                        </N.PopNewCard__wrap>
                        <div className="prod_checkbox">
                            <div className="radio-toolbar">
                                <input
                                    onChange={handleInputChange}
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                />
                                <label htmlFor="radio1">Web Design</label>

                                <input
                                    onChange={handleInputChange}
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                />
                                <label htmlFor="radio2">Research</label>

                                <input
                                    onChange={handleInputChange}
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                />
                                <label htmlFor="radio3">Copywriting</label>
                            </div>
                        </div>
                        <N.PopNewCard__create
                            $HoverNumber={"hover01"}
                            id="btnCreate"
                            onClick={handleFromSubmit}
                        >
                            Создать задачу
                        </N.PopNewCard__create>
                    </N.PopNewCard__content>
                </N.PopNewCard__block>
            </N.PopNewCard__container>
        </N.PopNewCard>
    );
}

export default PopNewCard;
