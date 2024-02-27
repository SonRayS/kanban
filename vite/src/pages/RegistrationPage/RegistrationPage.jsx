import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as R from "./RegistrationPage.style";
import SendFormReg from "../../components/SendFormReg/SendFormReg";

function RegistrationPage() {
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
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                            />
                            <R.ModalInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />
                            <R.ModalInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />
                            <R.ModalButton
                                $HoverNumber={"hover01"}
                                id="SignUpEnter"
                                onClick={SendFormReg}
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
