import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as R from "./RegistrationPage.style";
import { UserRegistration } from "../../components/Api/Registration/Registration";
import { useState } from "react";

function RegistrationPage() {
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
        console.log("data", regData);
        await UserRegistration(regData);
    };

    return (
        <R.Wrapper>
            <R.ContainerSignIn>
                <R.Modal>
                    <R.ModalBlock>
                        <R.ModalTtl>
                            <R.ModalTtlH2>Регистрация</R.ModalTtlH2>
                        </R.ModalTtl>
                        <R.ModalFromLogin
                            id="formLogUp"
                            action="#"
                        >
                            <R.ModalInput
                                value={regData.name}
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <R.ModalInput
                                value={regData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <R.ModalInput
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
                                <R.ModalText>
                                    Уже есть аккаунт?
                                    <Link to={AppRoutes.PAGE_AUTHORIZATION}> Войдите здесь</Link>
                                </R.ModalText>
                            </R.ModalFromGroup>
                        </R.ModalFromLogin>
                    </R.ModalBlock>
                </R.Modal>
            </R.ContainerSignIn>
        </R.Wrapper>
    );
}

export default RegistrationPage;
