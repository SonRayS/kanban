import CardForm from "../CardForm/CardFormItem.jsx";

function ColumnStatus({ status }) {
    return (
        <>
            <div className="main__column column">
                <div className="column__title">
                    <p>{status}</p>
                </div>
                <div className="cards">
                    <CardForm
                        statusTask={"Web dising"}
                        taskType={"Новая задача"}
                        date={"30.10.23"}
                    />
                    <CardForm
                        statusTask={"Web dising"}
                        taskType={"Новая задача"}
                        date={"30.10.23"}
                    />
                    <CardForm
                        statusTask={"Web dising"}
                        taskType={"Новая задача"}
                        date={"30.10.23"}
                    />
                    <CardForm
                        statusTask={"Web dising"}
                        taskType={"Новая задача"}
                        date={"30.10.23"}
                    />
                </div>
            </div>
        </>
    );
}

export default ColumnStatus;
