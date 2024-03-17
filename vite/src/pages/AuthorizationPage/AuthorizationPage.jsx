import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as A from "./AuthorizationPage.style";

function AuthorizationPage({ GoToMenu }) {
    return (
        <A.Wrapper>
            <A.ContainerSignIn>
                <A.Modal>
                    <A.ModalBlock>
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <A.ModalFromLogin
                            id="formLogIn"
                            action="#"
                        >
                            <A.ModalInput
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />
                            <A.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <A.ModalButton
                                onClick={GoToMenu}
                                $HoverNumber={"hover01"}
                                id="btnEnter"
                            >
                                <Link to={AppRoutes.PAGE_MAIN}>
                                    <A.ModalBtnText>Войти</A.ModalBtnText>
                                </Link>
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
