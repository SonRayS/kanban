import "../../App.css";
import MainHeader from "../../components/Header/Header.jsx";
import ColumnStatus from "../../components/ColumnStatus/ColumnStatus.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import LoadPage from "../../components/Loading/LoadingMassage/Loading.jsx";
import { useState, useEffect, React } from "react";
import { GlobalStyle } from "../../components/GlobalStyle/Global.style.js";
import { Wrapper } from "../../App.style.js";
import { Outlet } from "react-router-dom";
import { getTask } from "../../components/Api/GetTask/GetTask.js";
import { useUserContext, useTaskContext } from "../../contexts/useUser";

const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

function MainPage() {
    const { user } = useUserContext();
    const { setCards } = useTaskContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /* console.log(user); */
        getTask({ token: user.token })
            .then((response) => {
                /* console.log(response.tasks); */
                setCards(response.tasks);
                setIsLoading(false);
            })
            .catch(() => {
                alert(error);
            });
    }, [user, setCards]);

    const { cards } = useTaskContext();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                {/*  ------Header------- */}
                <MainHeader />
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
