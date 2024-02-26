import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/Page_not_found/Page_not_found.jsx";
import Registration from "./pages/Page_registration/Page_registration.jsx";
import Author from "./pages/Page_authorization/Page_authorization.jsx";
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

    const AppRoutes = {
        PAGE_MAIN: "/",
        PAGE_AUTHORIZATION: "/login",
        PAGE_REGISTRATION: "/register",
        PAGE_CARD: "/card/:id",
        PAGE_EXIT: "/exit",
        PAGE_NOT_FOUND: "*",
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                {/* ------POP------- */}
                <PopExit />
                <PopNewCard />
                <PopBrowse />
                {/*  ------POP------- */}
                {/*  ------Header------- */}s
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
