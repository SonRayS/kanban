import "../../App.css";
import React from "react";
import MainHeader from "../../components/Header/header.jsx";
import ColumnStatus from "../../components/ColumnStatus/ColumnStatus.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import LoadPage from "../../components/Loading/LoadingMassage/Loading.jsx";
import { useState, useEffect } from "react";
import { GlobalStyle } from "../../components/GlobalStyle/Global.style.js";
import { Wrapper } from "../../App.style.js";
import { Outlet } from "react-router-dom";
import { getTask } from "../../components/Api/GetTask/GetTask.js";
const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

function MainPage({ user }) {
    const [isLoading, setIsLoading] = useState(true);
    /*     useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []); */

    const [cards, setCards] = useState([]);

    useEffect(() => {
        getTask({ token: user.token })
            .then((response) => {
                console.log(response);
                setCards(response.tasks);
                setIsLoading(false);
            })
            .catch(() => {
                alert(error);
            });
    }, [user]);

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
                {/*  ------Header------- */}
                <MainHeader addCard={addCard} />
                {/*  ------Header------- */}
                <Outlet />
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

export default MainPage;
