import Calendar from "../../Calendar/Calendar";
import { useState } from "react";

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
        <div
            className="pop-new-card"
            id="popNewCard"
        >
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        <a
                            href="#"
                            className="pop-new-card__close"
                        >
                            &#10006;
                        </a>
                        <div className="pop-new-card__wrap">
                            <form
                                className="pop-new-card__form form-new"
                                id="formNewCard"
                                action="#"
                            >
                                <div className="form-new__block">
                                    <label
                                        htmlFor="formTitle"
                                        className="subttl"
                                    >
                                        Название задачи
                                    </label>
                                    <input
                                        value={newTask.title}
                                        onChange={handleInputChange}
                                        className="form-new__input"
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                    />
                                </div>
                                <div className="form-new__block">
                                    <label
                                        htmlFor="textArea"
                                        className="subttl"
                                    >
                                        Описание задачи
                                    </label>
                                    <textarea
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        className="form-new__area"
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                    ></textarea>
                                </div>
                            </form>

                            {/* ------------CALENDAR----------- */}

                            {Calendar}

                            {/* ------------CALENDAR----------- */}
                        </div>
                        {/* <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div> */}
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
                        <button
                            className="form-new__create _hover01"
                            id="btnCreate"
                            onClick={handleFromSubmit}
                        >
                            Создать задачу
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopNewCard;
