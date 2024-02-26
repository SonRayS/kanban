import { Link } from "react-router-dom";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes";

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
                <div className="wrapper">
                    <div className="container-signin">
                        <div className="modal">
                            <div className="modal__block">
                                <div className="modal__ttl">
                                    <h2>Вход</h2>
                                </div>
                                <form
                                    className="modal__form-login"
                                    id="formLogIn"
                                    action="#"
                                >
                                    <input
                                        className="modal__input"
                                        type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Эл. почта"
                                    />
                                    <input
                                        className="modal__input"
                                        type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"
                                    />
                                    <button
                                        onClick={GoToMenu}
                                        className="modal__btn-enter _hover01"
                                        id="btnEnter"
                                    >
                                        <Link to={AppRoutes.PAGE_MAIN}>Войти</Link>
                                    </button>
                                    <div className="modal__form-group">
                                        <p>Нужно зарегистрироваться?</p>
                                        <Link to={AppRoutes.PAGE_REGISTRATION}>Регистрируйтесь здесь</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Page_author;
