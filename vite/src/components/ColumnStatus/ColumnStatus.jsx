import CardForm from "../CardForm/CardFormItem.jsx";

function ColumnStatus({ status, CardList }) {
    return (
        <>
            <div className="main__column column">
                <div className="column__title">
                    <p>{status}</p>
                </div>
                <div className="cards">
                    {CardList.map((el) => (
                        <CardForm
                            statusTask={el.theme}
                            taskType={el.title}
                            date={el.date}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ColumnStatus;
