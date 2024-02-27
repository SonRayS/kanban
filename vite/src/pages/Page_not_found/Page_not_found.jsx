import { Link } from "react-router-dom";
import "../../App.css";
import { PageNotFound } from "./Page_not_found.style";
import { GlobalStyle } from "../../components/GlobalStyle/Global.style.js";
import { AppRoutes } from "../../components/AppRoutes/AppRoutes.js";
import { PageNotFoundP, PageNotFoundImg, ModalBtnText, ModalButton } from "./Page_not_found.style";

function Page_not_found() {
    return (
        <>
            <GlobalStyle />
            <PageNotFound>
                <Link to={"/"}>
                    <PageNotFoundImg
                        src="/public/Xm404.gif"
                        alt="Page not found :C"
                    />
                </Link>
                <PageNotFoundP>
                    Error 404, page not found :C{" "}
                    <ModalButton
                        $HoverNumber={"hover01"}
                        id="SignUpEnter"
                    >
                        <Link to={AppRoutes.PAGE_AUTHORIZATION}>
                            {" "}
                            <ModalBtnText>GO BACK</ModalBtnText>
                        </Link>
                    </ModalButton>
                </PageNotFoundP>
            </PageNotFound>
        </>
    );
}

export default Page_not_found;
