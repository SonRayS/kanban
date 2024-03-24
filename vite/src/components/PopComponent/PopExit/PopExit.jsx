import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes/AppRoutes";
import * as E from "./PopExit.style";

function PopExit({ exit }) {
    return (
        <E.PopExit id="popExit">
            <E.PopExit__container>
                <E.PopExit__block>
                    <E.PopExit__ttl>
                        <E.PopExit__ttl_h2>Выйти из аккаунта?</E.PopExit__ttl_h2>
                    </E.PopExit__ttl>
                    <E.PopExit__form
                        id="formExit"
                        action="#"
                    >
                        <E.PopExit__form_group>
                            <E.PopExit__exit_yes
                                onClick={exit}
                                $HoverNumber={"hover01"}
                                id="exitYes"
                            >
                                Да, выйти
                            </E.PopExit__exit_yes>
                            <E.PopExit__exit_no
                                $HoverNumber={"hover03"}
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
