import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import * as E from "./PopExit.style";
import { useUser } from "../../Hooks/useUser";
import useTheme from "../../Hooks/useTheme";

function PopExit() {
    const { logout } = useUser();
    const navigate = useNavigate();

    return (
        <E.PopExit id="popExit">
            <E.PopExit__container>
                <E.PopExit__block $Theme={useTheme().theme}>
                    <E.PopExit__ttl>
                        <E.PopExit__ttl_h2 $Theme={useTheme().theme}>Выйти из аккаунта?</E.PopExit__ttl_h2>
                    </E.PopExit__ttl>
                    <E.PopExit__form
                        id="formExit"
                        action="#"
                    >
                        <E.PopExit__form_group>
                            <E.PopExit__exit_yes
                                onClick={() => {
                                    logout();
                                    navigate(AppRoutes.PAGE_MAIN);
                                }}
                                $HoverNumber={"hover01"}
                                id="exitYes"
                            >
                                Да, выйти
                            </E.PopExit__exit_yes>
                            <E.PopExit__exit_no
                                $HoverNumber={"hover03"}
                                $Theme={useTheme().theme}
                                id="exitNo"
                            >
                                <Link to={AppRoutes.PAGE_MAIN}>Нет, остаться</Link>
                            </E.PopExit__exit_no>
                        </E.PopExit__form_group>
                    </E.PopExit__form>
                </E.PopExit__block>
            </E.PopExit__container>
        </E.PopExit>
    );
}

export default PopExit;
