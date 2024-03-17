import styled from "styled-components";
import { HoverEffect } from "../../components/Header/header.style";

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
`;

export const ContainerSignIn = styled.div``;

export const Modal = styled.div`
    width: 368px;
    height: 329px;
    border-radius: 4px;
    border: solid #565eef 2px;
    margin-left: auto;
    margin-right: auto;
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

export const ModalFromLogin = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
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
    margin: 4px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    width: 178px;
    height: 20px;
    border: solid #b8bbec 1px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
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
    color: #6e75fc;
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
