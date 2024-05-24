import { Link } from "react-router-dom";
import "../../App.css";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes.js";
import { PageNotFoundP, PageNotFoundImg, ModalBtnText, ModalButton, PageNotFound } from "./NotFoundPage.style.js";
import useTheme from "../../components/Hooks/useTheme.js";

function NotFoundPage({ errorText }) {
    const { theme } = useTheme();

    return (
        <>
            <PageNotFound>
                <PageNotFoundImg
                    src="/public/Xm404.gif"
                    alt="Page not found :C"
                />

                <PageNotFoundP $Theme={theme}>
                    {errorText ? errorText : "Error 404, page not found :C"}
                    <ModalButton
                        $HoverNumber={"hover01"}
                        id="SignUpEnter"
                    >
                        <Link to={AppRoutes.PAGE_AUTHORIZATION}>
                            <ModalBtnText>GO BACK</ModalBtnText>
                        </Link>
                    </ModalButton>
                </PageNotFoundP>
            </PageNotFound>
        </>
    );
}

export default NotFoundPage;
