import CardForm from "../CardForm/CardFormItem.jsx";

function ColumnStatus({ status }) {
    return (
        <>
            <div class="main__column column">
                <div class="column__title">
                    <p>{status}</p>
                </div>
                <div class="cards">
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
