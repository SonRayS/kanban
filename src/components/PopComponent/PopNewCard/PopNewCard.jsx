import Calendar from "../../Calendar/Calendar";
import { useState } from "react";
import * as N from "./PopNewCard.style";
import { PopBrowse__subLabelTtl } from "../PopBrowse/PopBrowse.style";
import { useTasks } from "../../Hooks/useTasks";
import { useUser } from "../../Hooks/useUser";
import { useNavigate, Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import { AddTask } from "../../Api/AddTask/AddTask";
import useTheme from "../../Hooks/useTheme";
import { topicName } from "../../CardForm/CardForm.style";

function PopNewCard() {
    const { user } = useUser();
    const { setCards } = useTasks();
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

    const { theme } = useTheme();

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        topic: "",
    });

    const handleFromSubmit = async (e) => {
        e.preventDefault();
        const taskData = {
            ...newTask,
            date: selectedDate,
            token: user.token,
        };
        await AddTask(taskData)
            .then((data) => {
                if (data.error) {
                    return alert("Пожалуйста заполните все поля");
                }
                setCards(data.tasks);
                navigate(AppRoutes.PAGE_MAIN);
            })
            .catch((error) => {
                console.log(error.message);
            });
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
                <N.PopNewCard__block $Theme={theme}>
                    <N.PopNewCard__content>
                        <N.PopNewCard__tll $Theme={theme}>Создание задачи</N.PopNewCard__tll>
                        <Link to={AppRoutes.PAGE_MAIN}>
                            <N.PopNewCard__close>&#10006;</N.PopNewCard__close>
                        </Link>
                        <N.PopNewCard__wrap>
                            <N.PopNewCard__form
                                id="formNewCard"
                                action="#"
                            >
                                <N.PopNewCard__nweBlock>
                                    <PopBrowse__subLabelTtl
                                        $Theme={theme}
                                        htmlFor="formTitle"
                                    >
                                        Название задачи
                                    </PopBrowse__subLabelTtl>
                                    <N.PopNewCard__input
                                        $Theme={theme}
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
                                    <PopBrowse__subLabelTtl
                                        $Theme={theme}
                                        htmlFor="textArea"
                                    >
                                        Описание задачи
                                    </PopBrowse__subLabelTtl>
                                    <N.PopNewCard__area
                                        $Theme={theme}
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                    ></N.PopNewCard__area>
                                </N.PopNewCard__nweBlock>
                            </N.PopNewCard__form>

                            {/* ------------CALENDAR----------- */}
                            <Calendar
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                                disabled={false}
                            />
                            {/* ------------CALENDAR----------- */}
                        </N.PopNewCard__wrap>
                        <N.ProdCheckbox>
                            <PopBrowse__subLabelTtl $Theme={theme}>Категория</PopBrowse__subLabelTtl>
                            <N.RadioToolbar>
                                <N.InputRadio1
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <N.RadioToolbarLabel1
                                    htmlFor="radio1"
                                    $topicColor={topicName["WebDesign"]}
                                >
                                    WebDesign
                                </N.RadioToolbarLabel1>

                                <N.InputRadio1
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={handleInputChange}
                                />
                                <N.RadioToolbarLabel2
                                    htmlFor="radio2"
                                    $topicColor={topicName["Research"]}
                                >
                                    Research
                                </N.RadioToolbarLabel2>

                                <N.InputRadio1
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={handleInputChange}
                                />
                                <N.RadioToolbarLabel3
                                    htmlFor="radio3"
                                    $topicColor={topicName["Copywriting"]}
                                >
                                    Copywriting
                                </N.RadioToolbarLabel3>
                            </N.RadioToolbar>
                        </N.ProdCheckbox>
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
