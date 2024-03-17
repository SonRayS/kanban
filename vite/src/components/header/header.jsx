import { useEffect, useState } from "react";
import * as S from "./header.style";
import { Container } from "../GlobalStyle/Global.style";
import { Link } from "react-router-dom";
import { AppRoutes } from "../AppRoutes/AppRoutes";

function MainHeader({ addCard }) {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    /*   useEffect(() => {
        GetTask().then((toDos) => console.log(toDos)), [];
    }); */

    return (
        <S.StyleHeader>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <Link
                            to={AppRoutes.PAGE_MAIN}
                            target="_self"
                        >
                            <img
                                src="/public/logo.png"
                                alt="logo"
                            />
                        </Link>
                    </S.HeaderLogo>

                    <S.HeaderNav>
                        <S.HeaderBtnMainNew
                            $HoverNumber={"hover01"}
                            id="btnMainNew"
                            onClick={addCard}
                        >
                            <a>Создать новую задачу</a>
                        </S.HeaderBtnMainNew>

                        <S.HeaderUser
                            $HoverNumber={"hover02"}
                            href="#user-set-target"
                            onClick={isOpenMenu}
                        >
                            Ivan Ivanov
                        </S.HeaderUser>
                        {isOpen && (
                            <S.PopUserSet id="user-set-target">
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                <div className="pop-user-set__theme">
                                    <p>Темная тема</p>
                                    <S.Checkbox
                                        onClick={isOpenMenu}
                                        type="checkbox"
                                        name="checkbox"
                                    />
                                </div>
                                <S.HeaderBtnMenu $HoverNumber={"hover03"}>
                                    <Link to={AppRoutes.PAGE_EXIT}>Выйти</Link>
                                </S.HeaderBtnMenu>
                            </S.PopUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.StyleHeader>
    );
}

export default MainHeader;
