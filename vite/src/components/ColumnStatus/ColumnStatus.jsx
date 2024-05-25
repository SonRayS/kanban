import { Card } from "../CardForm/CardForm.style.js";
import CardForm from "../CardForm/CardFormItem.jsx";
import DropArea from "../DropArea/DropArea.jsx";
import { ColumnTitle, MainColumn } from "./ColumnStatus.style.js";
import { useState } from "react";
import React from "react";

function ColumnStatus({ status, CardList }) {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <>
            <MainColumn>
                <ColumnTitle>
                    <p>{status}</p>
                </ColumnTitle>
                <Card>
                    <DropArea />
                    {CardList.map((el) => (
                        <React.Fragment key={el._id}>
                            <CardForm
                                statusTask={el.topic}
                                taskType={el.title}
                                date={el.date}
                                key={el._id}
                                id={el._id}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea />
                        </React.Fragment>
                    ))}
                </Card>
            </MainColumn>
        </>
    );
}

export default ColumnStatus;
