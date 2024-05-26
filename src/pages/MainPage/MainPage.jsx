import "../../App.css";
import MainHeader from "../../components/Header/Header.jsx";
import ColumnStatus from "../../components/ColumnStatus/ColumnStatus.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import LoadPage from "../../components/Loading/LoadingMassage/Loading.jsx";
import { useState, useEffect, React } from "react";
import { GlobalStyle } from "../../components/GlobalStyle/Global.style.js";
import { Wrapper } from "../../App.style.js";
import { Outlet, useNavigate } from "react-router-dom";
import { getTask } from "../../components/Api/GetTask/GetTask.js";
import { useUserContext, useTaskContext } from "../../contexts/useUser";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes.js";
import { putTodo } from "../../components/Api/EditTask/EditTask.js";

const statusList = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

function MainPage() {
    const { user } = useUserContext();
    const { setCards } = useTaskContext();
    const [isLoading, setIsLoading] = useState(true);
    const [activeCard, setActiveCard] = useState(null);
    const { cards } = useTaskContext();
    const navigate = useNavigate();

    useEffect(() => {
        getTask({ token: user.token })
            .then((response) => {
                setCards(response.tasks);
                setIsLoading(false);
            })
            .catch(() => {
                alert(error);
            });
    }, [user, setCards]);

    const onDrop = ({ status, token }) => {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i]._id === activeCard) {
                cards[i].status = status;

                putTodo({ token, id: activeCard, taskData: cards[i] })
                    .then((response) => {
                        setCards(response.tasks);
                        navigate(AppRoutes.PAGE_MAIN);
                    })
                    .catch((error) => {
                        console.log(error);
                        alert(error);
                    });
            }
        }

        if (activeCard == null || activeCard === undefined) return;
    };

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
                                setActiveCard={setActiveCard}
                                onDrop={onDrop}
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
