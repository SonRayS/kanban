import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as R from "./Page_registration.style";

function Page_registration() {
    return (
        <>
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        httpEquiv="X-UA-Compatible"
                        content="IE=edge"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="stylesheet"
                        href="../css/signup.css"
                    />
                    {/* <!-- <link rel="stylesheet" href="../css/signup_dark.css"> --> */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200;8..144,300;8..144,400;8..144,700;8..144,800;8..144,900&family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <title>Kanban-board</title>
                </head>

                <R.Body>
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
                                        >
                                            <Link to={AppRoutes.PAGE_NOT_FOUND}>
                                                <R.ModalBtnText>Зарегистрироваться</R.ModalBtnText>
                                            </Link>
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
                </R.Body>
            </html>
        </>
    );
}

export default Page_registration;
