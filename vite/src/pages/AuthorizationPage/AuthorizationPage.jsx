import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as A from "./AuthorizationPage.style";
import { useState } from "react";
import { AuthorUser } from "../../components/Api/AuthorUser/AuthorUser";
import { useUser } from "../../components/Hooks/useUser";

function AuthorizationPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        login: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение target = DOM element

        setLoginData({
            ...loginData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    /*   e.preventDefault(); // отказ от e по у. кнопка отправляет форму по у. */

    const authorLogin = async (e) => {
        e.preventDefault();
        await AuthorUser(loginData).then((data) => {
            login(data.user);
            navigate(AppRoutes.PAGE_MAIN);
        });
    };

    return (
        <A.Wrapper>
            <A.ContainerSignIn>
                <A.Modal>
                    <A.ModalBlock>
                        <A.ModalBlock_ttl>
                            <A.ModalBlock_ttl_p>Вход</A.ModalBlock_ttl_p>
                        </A.ModalBlock_ttl>
                        <A.ModalFromLogin
                            id="formLogIn"
                            action="#"
                        >
                            <A.ModalInput
                                value={loginData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <A.ModalInput
                                value={loginData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />

                            <A.ModalButton
                                $HoverNumber={"hover01"}
                                id="btnEnter"
                                onClick={authorLogin}
                            >
                                <A.ModalBtnText>Войти</A.ModalBtnText>
                            </A.ModalButton>
                            <A.ModalFromGroup>
                                <A.ModalText>
                                    Нужно зарегистрироваться?
                                    <br />
                                    <Link to={AppRoutes.PAGE_REGISTRATION}>Регистрируйтесь здесь</Link>
                                </A.ModalText>
                            </A.ModalFromGroup>
                        </A.ModalFromLogin>
                    </A.ModalBlock>
                </A.Modal>
            </A.ContainerSignIn>
        </A.Wrapper>
    );
}

export default AuthorizationPage;
