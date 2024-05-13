import { useState } from "react";
import * as S from "./Header.style";
import { Container } from "../GlobalStyle/Global.style";
import { Link } from "react-router-dom";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import useTheme from "../Hooks/useTheme";
import { useUser } from "../Hooks/useUser";

function MainHeader({ addCard }) {
    const { user } = useUser();
    /* --------------MENU------------------- */
    const [isOpen, setIsOpen] = useState(false);
    const isOpenMenu = () => {
        setIsOpen((prevState) => !prevState);
    };
    /* --------------MENU------------------- */
    /*  -------------THEME----------------- */

    const { theme, toggleTheme } = useTheme();

    /* -------------THEME----------------- */

    return (
        <S.StyleHeader $Theme={theme}>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <Link
                            to={AppRoutes.PAGE_MAIN}
                            target="_self"
                        >
                            <img
                                src={"/public/" + theme + ".png"}
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
                            <Link to={AppRoutes.PAGE_ADD_TASK}>
                                <S.HeaderBtnNewText>Создать новую задачу</S.HeaderBtnNewText>
                            </Link>
                        </S.HeaderBtnNewTask>

                        <S.HeaderUser
                            $HoverNumber={"hover02"}
                            href="#user-set-target"
                            $Theme={theme}
                            onClick={isOpenMenu}
                        >
                            {user.name}
                        </S.HeaderUser>
                        {isOpen && (
                            <S.HeaderPopUserSet $Theme={theme}>
                                <S.PopUserSet_name $Theme={theme}>{user.name}</S.PopUserSet_name>
                                <S.PopUserSet_mail>{user.login}</S.PopUserSet_mail>
                                <S.PopUserSet_theme>
                                    <S.PopUserSet_theme_p $Theme={theme}>Темная тема</S.PopUserSet_theme_p>
                                    <S.Checkbox
                                        type="checkbox"
                                        name="checkbox"
                                        onClick={toggleTheme}
                                    />
                                </S.PopUserSet_theme>
                                <S.HeaderBtnMenu
                                    $Theme={theme}
                                    $HoverNumber={"hover03"}
                                >
                                    <Link to={AppRoutes.PAGE_EXIT}>Выйти</Link>
                                </S.HeaderBtnMenu>
                            </S.HeaderPopUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.StyleHeader>
    );
}

export default MainHeader;
