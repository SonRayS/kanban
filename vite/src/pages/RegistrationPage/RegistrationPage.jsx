import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as R from "./RegistrationPage.style";
import { UserRegistration } from "../../components/Api/Registration/Registration";
import { useState } from "react";
import { useUser } from "../../components/Hooks/useUser";
import useTheme from "../../components/Hooks/useTheme";

function RegistrationPage() {
    const { login } = useUser();
    const navigate = useNavigate();

    const { theme, toggleTheme } = useTheme();

    const [regData, setRegData] = useState({
        name: "",
        login: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение target = DOM element

        setRegData({
            ...regData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const sendFormReg = async (e) => {
        e.preventDefault();
        await UserRegistration(regData).then((data) => {
            login(data.user);
            navigate(AppRoutes.PAGE_MAIN);
        });
    };

    return (
        <>
            <R.Wrapper $Theme={theme}>
                <R.ContainerSignIn>
                    <R.Modal $Theme={theme}>
                        <R.ModalTtl>
                            <R.ModalTtlH2 $Theme={theme}>Регистрация</R.ModalTtlH2>
                            <R.ThemeIco
                                onClick={toggleTheme}
                                $Theme={theme}
                            ></R.ThemeIco>
                        </R.ModalTtl>
                        <R.ModalBlock>
                            <R.ModalFromLogin
                                id="formLogUp"
                                action="#"
                            >
                                <R.ModalInput
                                    $Theme={theme}
                                    value={regData.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="name"
                                    id="first-name"
                                    placeholder="Имя"
                                />
                                <R.ModalInput
                                    $Theme={theme}
                                    value={regData.login}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="login"
                                    id="loginReg"
                                    placeholder="Эл. почта"
                                />
                                <R.ModalInput
                                    $Theme={theme}
                                    value={regData.password}
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="passwordFirst"
                                    placeholder="Пароль"
                                />
                                <R.ModalButton
                                    $HoverNumber={"hover01"}
                                    id="SignUpEnter"
                                    onClick={sendFormReg}
                                >
                                    <R.ModalBtnText>Зарегистрироваться</R.ModalBtnText>
                                </R.ModalButton>
                                <R.ModalFromGroup>
                                    <R.ModalText $Theme={theme}>
                                        Уже есть аккаунт?
                                        <br />
                                        <Link to={AppRoutes.PAGE_AUTHORIZATION}>Войдите здесь</Link>
                                    </R.ModalText>
                                </R.ModalFromGroup>
                            </R.ModalFromLogin>
                        </R.ModalBlock>
                    </R.Modal>
                </R.ContainerSignIn>
            </R.Wrapper>
        </>
    );
}

export default RegistrationPage;
