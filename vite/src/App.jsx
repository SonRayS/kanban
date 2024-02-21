import "./App.css";
import MainHeader from "./components/Header/header.jsx";
import ColumnStatus from "./components/ColumnStatus/ColumnStatus.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import PopExit from "./components/PopComponent/PopExit/PopExit.jsx";
import PopNewCard from "./components/PopComponent/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopComponent/PopBrowse/PopBrowse.jsx";
import LoadPage from "./components/Loading/LoadingMassage/Loading.jsx";
import CardList from "./data.js";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./components/GlobalStyle/Global.style.js";
import { Wrapper } from "./App.style.js";

const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const [cards, setCards] = useState(CardList);
    function addCard() {
        const newCard = {
            id: cards.length + 1,
            theme: "Copywriting",
            title: "Новая задача",
            date: "30.10.23",
            status: "Без статуса",
        };
        setCards([...cards, newCard]);
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                {/* ------POP------- */}
                <PopExit />
                <PopNewCard />
                <PopBrowse />
                {/*  ------POP------- */}
                {/*  ------Header------- */}
                <MainHeader addCard={addCard} />
                {/*  ------Header------- */}
                {/*  ------Column------- */}

                {isLoading ? (
                    LoadPage()
                ) : (
                    <MainContent>
                        {statusList.map((status) => (
                            <ColumnStatus
                                status={status}
                                key={status}
                                CardList={cards.filter((el) => el.status === status)}
                            />
                        ))}
                    </MainContent>
                )}
                {/*  ------Column------- */}
            </Wrapper>
        </>
    );
}

export default App;
