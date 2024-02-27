import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";
import * as A from "./Page.authorization.style";

function Page_author({ GoToMenu }) {
    return (
        <html lang="en">
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
                    href="../css/signin.css"
                />
                {/* <!-- <link rel="stylesheet" href="../css/signin_dark.css"> --> */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <title>Kanban-board</title>
            </head>
            <body>
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
            </body>
        </html>
    );
}

export default Page_author;
