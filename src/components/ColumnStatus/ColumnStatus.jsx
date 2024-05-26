import { id } from "date-fns/locale";
import { Card } from "../CardForm/CardForm.style.js";
import CardForm from "../CardForm/CardFormItem.jsx";
import DropArea from "../DropArea/DropArea.jsx";
import { ColumnTitle, MainColumn } from "./ColumnStatus.style.js";
import React from "react";
import { useUserContext } from "../../contexts/useUser";

function ColumnStatus({ status, CardList, setActiveCard, onDrop }) {
    const { user } = useUserContext();

    return (
        <>
            <MainColumn>
                <ColumnTitle>
                    <p>{status}</p>
                </ColumnTitle>
                <Card>
                    <DropArea onDrop={() => onDrop({ status, token: user.token })} />
                    {CardList.map(
                        (el) =>
                            el.status === status && (
                                <React.Fragment>
                                    <CardForm
                                        statusTask={el.topic}
                                        taskType={el.title}
                                        date={el.date}
                                        key={el._id}
                                        id={el._id}
                                        setActiveCard={setActiveCard}
                                    />
                                    <DropArea onDrop={() => onDrop({ status, token: user.token })} />
                                </React.Fragment>
                            )
                    )}
                </Card>
            </MainColumn>
        </>
    );
}

export default ColumnStatus;
