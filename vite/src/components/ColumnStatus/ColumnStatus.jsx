import { Card } from "../CardForm/CardForm.style.js";
import CardForm from "../CardForm/CardFormItem.jsx";
import { ColumnTitle, MainColumn } from "./ColumnStatus.style.js";

function ColumnStatus({ status, CardList }) {
    return (
        <>
            <MainColumn>
                <ColumnTitle>
                    <p>{status}</p>
                </ColumnTitle>
                <Card>
                    {CardList.map((el) => (
                        <CardForm
                            statusTask={el.theme}
                            taskType={el.title}
                            date={el.date}
                            key={el.id}
                        />
                    ))}
                </Card>
            </MainColumn>
        </>
    );
}

export default ColumnStatus;
