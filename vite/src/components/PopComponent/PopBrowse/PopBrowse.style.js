import styled from "styled-components";
import { topicStyles } from "../../CardForm/CardForm.style";
import { HoverEffect } from "../../Header/Header.style";
import {
    SwitchThemeBG,
    SwitchThemeBackGroundTask,
    SwitchThemeBtn,
    SwitchThemeRadioBtn,
    SwitchThemeText,
} from "../../GlobalStyle/Global.style";

export const PopBrowse = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
    @media screen and (max-width: 660px) {
        top: 70px;
    }
    &:target {
        display: block;
    }
`;

export const PopBrowse__container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`;

export const PopBrowse__block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;
    @media screen and (max-width: 660px) {
        border-radius: 0;
    }
    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__content = styled.div`
    display: block;
    text-align: left;
`;

export const PopBrowse__topBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowse__ttl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__color = styled.div`
    display: inline-block;
    padding: 8px 20px 8px 20px;
    border-radius: 24px;
    color: #9a48f1;
    background: #e9d4ff;
    margin-right: 7px;
    background-color: ${({ $topicColor }) => topicStyles[$topicColor]?.backgroundColor || "#94a6be"};
    p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#ffffff"};
    }
`;

export const PopBrowse__status = styled.div`
    margin-bottom: 12px;
`;

export const PopBrowse__wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopBrowse__subTtl = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__statusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const PopBrowse__statusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94a6be;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    background-color: ${({ $topicColor }) => topicStyles[$topicColor]?.backgroundColor || "#94a6be"};
    p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#ffffff"};
    }
`;

export const PopBrowse__hide = styled(PopBrowse__statusTheme)``;

export const PopBrowse__form = styled.div`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`;

export const PopBrowse__formBrowseBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PopBrowse__subLabelTtl = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__area = styled.textarea`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    max-width: 370px;
    margin-top: 14px;
    resize: none;
    height: 200px;

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 37px;
    }

    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__themeDown = styled.div`
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        display: block;
        margin-bottom: 20px;
    }
`;

export const PopBrowse__categories_p = styled.p`
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        display: block;
        margin-bottom: 20px;
    }
`;

export const PopBrowse__categoriesSubTtl = styled(PopBrowse__categories_p)`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
`;

export const PopBrowse__categoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.9;
    background-color: ${({ $topicColor }) => topicStyles[$topicColor]?.backgroundColor || "#94a6be"};
    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#ffffff"};
    }
`;

export const PopBrowse__btnBrowse = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    button {
        height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
    }
`;

export const PopBrowse__btnGroup = styled.div`
    margin-right: 8px;
    button {
        margin-right: 8px;
    }
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`;

export const PopBrowse__edit = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    background: transparent;
    color: #565eef;
    ${({ $Theme }) => SwitchThemeBtn[$Theme] || console.log("none Theme")}
    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const PopBrowse__delete = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    background: transparent;
    color: #565eef;
    ${({ $Theme }) => SwitchThemeBtn[$Theme] || console.log("none Theme")}
    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const PopBrowse__close = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    background-color: #565eef;
    color: #ffffff;
    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const PopBrowse__saveEdit = styled.button`
    border-radius: 4px;
    background: #565eef;
    border: none;
    outline: none;
    color: #ffffff;

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const StatusThemeLabel = styled.label`
    display: inline-block;
    padding: 8px 20px 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    cursor: pointer;
    margin-right: 7px;

    border: 0.7px solid #d4dbe5;

    white-space: nowrap;

    ${({ $Theme }) => SwitchThemeRadioBtn[$Theme] || console.log("none Theme")}
`;

export const RadioInput = styled.input`
    display: none;

    &:checked + label {
        background-color: #565eef;
        color: #ffffff;
    }
`;

export const RadioToolBar = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 7px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;

    letter-spacing: 0em;
    text-align: center;
    width: auto;
    overflow: auto;
`;
