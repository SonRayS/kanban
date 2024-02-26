import { useState } from "react";
import * as S from "./header.style";
import { Container } from "../GlobalStyle/Global.style";

function MainHeader({ addCard }) {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <S.StyleHeader>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <a
                            href=""
                            target="_self"
                        >
                            <img
                                src="/public/logo.png"
                                alt="logo"
                            />
                        </a>
                    </S.HeaderLogo>
                    <div className="header__logo _dark">
                        <a
                            href=""
                            target="_self"
                        >
                            <img
                                src="/public/logo_dark.png"
                                alt="logo"
                            />
                        </a>
                    </div>
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
                                {/* <!-- <a href="">x</a> --> */}
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                <div className="pop-user-set__theme">
                                    <p>Темная тема</p>
                                    <S.Checkbox
                                        type="checkbox"
                                        name="checkbox"
                                    />
                                </div>
                                <S.HeaderBtnMenu $HoverNumber={"hover03"}>
                                    <a href="#popExit">Выйти</a>
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
