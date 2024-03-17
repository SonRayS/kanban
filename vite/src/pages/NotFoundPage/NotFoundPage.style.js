import styled from "styled-components";
import { HoverEffect } from "../../components/Header/header.style";

export const PageNotFound = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const PageNotFoundP = styled.p`
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 24px;
`;

export const PageNotFoundImg = styled.img`
    margin-top: 128px;
`;

export const ModalButton = styled.button`
    margin: 12px;
    width: -webkit-fill-available;
    height: 42px;
    border-radius: 4px;
    background-color: #565eef;
    border: none;
    font-size: 18px;
    font-weight: 500;
    margin-right: 20px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")}
`;

export const ModalBtnText = styled.p`
    text-decoration: none;
    color: #ffffff;
`;
