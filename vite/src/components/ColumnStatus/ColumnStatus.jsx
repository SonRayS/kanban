import { Card } from "../CardForm/CardForm.style.js";
import CardForm from "../CardForm/CardFormItem.jsx";
import DropArea from "../DropArea/DropArea.jsx";
import { ColumnTitle, MainColumn } from "./ColumnStatus.style.js";
import React, { useState } from "react";
import { putTodo } from "../Api/EditTask/EditTask.js";
import { useUserContext, useTaskContext } from "../../contexts/useUser";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../AppRoutes/AppRoutes.js";

function ColumnStatus({ status, CardList }) {
    const { user } = useUserContext();
    const { setCards } = useTaskContext();
    const [activeCard, setActiveCard] = useState(null);
    const navigate = useNavigate();

    const onDrop = ({ token, id, title, description, topic, status, date }) => {
        const taskData = {
            title,
            description,
            topic,
            status,
            date,
        };

        console.log(taskData);

        putTodo({ token: user.token, id, taskData: taskData })
            .then((response) => {
                console.log(response);
                setCards(response.tasks);
                navigate(AppRoutes.PAGE_MAIN);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

        if (activeCard == null || activeCard === undefined) return;
    };

    return (
        <>
            <MainColumn>
                <ColumnTitle>
                    <p>{status}</p>
                </ColumnTitle>
                <Card>
                    {CardList.map((el) => (
                        <React.Fragment key={el._id}>
                            {/* <DropArea
                                onDrop={() =>
                                    onDrop({
                                        token: user.token,
                                        id: el._id,
                                        title: el.title,
                                        description: el._description,
                                        topic: el.topic,
                                        status,
                                        date: el.date,
                                    })
                                }
                            /> */}
                            <CardForm
                                statusTask={el.topic}
                                taskType={el.title}
                                date={el.date}
                                key={el._id}
                                id={el._id}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea
                                onDrop={() =>
                                    onDrop({
                                        token: user.token,
                                        id: el._id,
                                        title: el.title,
                                        description: el._description,
                                        topic: el.topic,
                                        status,
                                        date: el.date,
                                    })
                                }
                            />
                        </React.Fragment>
                    ))}
                </Card>
            </MainColumn>
        </>
    );
}

export default ColumnStatus;
