import styled from "styled-components";
import { HoverEffect } from "../../Header/Header.style";
import { SwitchThemeBtn, SwitchThemeBG, SwitchThemeText } from "../../GlobalStyle/Global.style";

export const PopExit = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    &:target {
        display: block;
    }
`;

export const PopExit__container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;
export const PopExit__block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    @media only screen and (max-width: 375px) {
        padding: 50px 20px;
    }
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none ThemeBtn")}
`;
export const PopExit__ttl = styled.div``;

export const PopExit__ttl_h2 = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none ThemeBtn")}
`;

export const PopExit__form = styled.div``;

export const PopExit__form_group = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 375px) {
        display: block;
    }
`;

export const PopExit__exit_yes = styled.button`
    width: 153px;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    margin-right: 10px;

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")}

    & a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

export const PopExit__exit_no = styled.button`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    ${({ $Theme }) => SwitchThemeBtn[$Theme] || console.log("none ThemeBtn")}
    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")}

    & a {
        width: 100%;
        height: 100%;
        color: #565eef;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover a {
        color: #ffffff;
    }

    @media only screen and (max-width: 375px) {
        width: 100%;
        height: 40px;
    }
`;
