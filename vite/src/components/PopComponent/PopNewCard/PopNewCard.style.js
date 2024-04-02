import styled from "styled-components";
import { HoverEffect } from "../../Header/Header.style";

export const PopNewCard = styled.div`
    display: none;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    &:target {
        display: block;
    }
    @media screen and (max-width: 660px) {
        top: 70px;
    }
`;

export const PopNewCard__container = styled.div`
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
`;

export const PopNewCard__block = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;
    @media screen and (max-width: 660px) {
        border-radius: 0;
    }
    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`;

export const PopNewCard__content = styled.div`
    display: block;
    text-align: left;
`;

export const PopNewCard__tll = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const PopNewCard__close = styled.a`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;
    &:hover {
        color: #000000;
    }
`;

export const PopNewCard__wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopNewCard__form = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    @media screen and (max-width: 660px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`;

export const PopNewCard__nweBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PopNewCard__input = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;
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
`;

export const PopNewCard__area = styled.textarea`
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
        height: 34px;
    }
`;

export const PopNewCard__create = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #ffffff;
    float: right;
    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`;
