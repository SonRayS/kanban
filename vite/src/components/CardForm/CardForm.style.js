import styled from "styled-components";
import { SwitchThemeBG, SwitchThemeText } from "../GlobalStyle/Global.style";

export const topicStyles = {
    _purple: {
        backgroundColor: "#e9d4ff",
        color: "#9a48f1",
    },
    _orange: {
        backgroundColor: "#ffe4c2",
        color: "#ff6d00",
    },
    _green: {
        backgroundColor: "#b4fdd1",
        color: "#06b16e",
    },
    _gray: {
        backgroundColor: "#94a6be",
        color: "#ffffff",
    },
};

export const TopicText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

export const CardTopic = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $topicColor }) => topicStyles[$topicColor]?.backgroundColor || "#94a6be"};

    ${TopicText} {
        color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#ffffff"};
    }
`;

export const topicName = {
    WebDesign: "_orange",
    Research: "_green",
    Copywriting: "_purple",
};

export const Card = styled.div`
    width: 100%;
    display: block;
    position: relative;
    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`;

export const CardsItem = styled.div`
    @keyframes card-animation {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            height: auto;
            opacity: 1;
        }
    }
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`;

export const CardsCard = styled.div`
    width: 220px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);

    @media screen and (max-width: 1200px) {
        width: 220px;
        height: 130px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
    ${({ $Theme }) => SwitchThemeBG[$Theme] || console.log("none Theme")};
`;

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;

    div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    }
`;

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 10px;
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")};
`;

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CardDateSvg = styled.svg`
    width: 13px;
`;

export const CardDateText = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
`;
