import styled from "styled-components";
import { HoverEffect } from "../../components/Header/Header.style";
import {
    SwitchThemeBackGroundTask,
    SwitchThemeText,
    SwitchThemeBG,
    SwitchThemeIco,
} from "../../components/GlobalStyle/Global.style";

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    ${({ $Theme }) => SwitchThemeBackGroundTask[$Theme] || console.log("none Theme")};
    align-content: center;
`;

export const ContainerSignIn = styled.div``;

export const ModalTtl = styled.div`
    display: flex;
`;

export const ModalTtlH2 = styled.h2`
    margin-bottom: 12px;
    align-content: center;
    margin-left: 80px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")};
`;

export const Modal = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    width: 368px;
    height: 329px;
    border-radius: 4px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    margin-left: auto;
    margin-right: auto;
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")}
    * input {
        ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")}
    }
`;

export const ModalBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

export const ModalFromLogin = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

export const ModalFromGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #9da1e9;
`;

export const ModalInput = styled.input`
    margin: 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    width: 178px;
    height: 20px;
    border: solid #b8bbec 1px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")}
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")}
`;

export const ModalButton = styled.button`
    margin: 12px;
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    border: none;
    font-size: 14px;
    font-weight: 500;
    margin-right: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")}
`;

export const ModalText = styled.p`
    margin: 12px;
    color: #4e5566;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

export const ModalBtnText = styled.p`
    text-decoration: none;
    color: #ffffff;
`;

export const ThemeIco = styled.div`
    width: 50px;
    height: 50px;
    margin: 4px;
    margin-left: 68px;
    ${({ $Theme }) => SwitchThemeIco[$Theme] || console.log("none Theme")};
`;
