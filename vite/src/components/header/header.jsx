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
                        <S.HeaderBtnNewTask
                            $HoverNumber={"hover01"}
                            id="btnMainNew"
                            onClick={addCard}
                        >
                            <S.HeaderBtnNewTask_a>Создать новую задачу</S.HeaderBtnNewTask_a>
                        </S.HeaderBtnNewTask>

                        <S.HeaderUser
                            $HoverNumber={"hover02"}
                            href="#user-set-target"
                            onClick={isOpenMenu}
                        >
                            Ivan Ivanov
                        </S.HeaderUser>
                        {isOpen && (
                            <S.PopUserSet id="user-set-target">
                                <S.PopUserSet_name>Ivan Ivanov</S.PopUserSet_name>
                                <S.PopUserSet_mail>ivan.ivanov@gmail.com</S.PopUserSet_mail>
                                <S.PopUserSet_theme>
                                    <S.PopUserSet_theme_p>Темная тема</S.PopUserSet_theme_p>
                                    <S.Checkbox
                                        onClick={isOpenMenu}
                                        type="checkbox"
                                        name="checkbox"
                                    />
                                </S.PopUserSet_theme>
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
