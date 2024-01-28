import "./App.css";
import MainHeader from "./components/Header/Header.jsx";
import ColumnStatus from "./components/ColumnStatus/ColumnStatus.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import PopExit from "./components/PopComponent/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopComponent/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopComponent/PopBrowse/PopBrowse.jsx";

function App() {
    return (
        <div className="wrapper">
            <>
                {/* ------POP------- */}
                <PopExit />
                <PopNewCard />
                <PopBrowse />
                {/*  ------POP------- */}
                {/*  ------Header------- */}
                <MainHeader />
                {/*  ------Header------- */}
                {/*  ------Column------- */}
                <MainContent>
                    <ColumnStatus status={"Без cтатуса"} />
                    <ColumnStatus status={"Нужно сделать"} />
                    <ColumnStatus status={"В работе"} />
                    <ColumnStatus status={"Тестирование"} />
                    <ColumnStatus status={"Готово"} />
                </MainContent>
                {/*  ------Column------- */}
            </>
        </div>
    );
}

export default App;
