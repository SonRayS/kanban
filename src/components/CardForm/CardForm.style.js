import styled from "styled-components";
import {
    SwitchThemeBG,
    SwitchThemeBackGroundTask,
    SwitchThemeLink,
    SwitchThemeText,
} from "../GlobalStyle/Global.style";

export const topicStyles = {
    _purple: {
        backgroundColor: "#9A48F1",
        color: "#ffffff",
    },
    _orange: {
        backgroundColor: "#FF6D00",
        color: "#ffffff",
    },
    _green: {
        backgroundColor: "#06B16E",
        color: "#ffffff",
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
    cursor: grab;
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

export const shadowDrop = {
    true: `
        box-shadow: 0px 0px 4px 1px #000000;
        color: #FFFFFF;
        transition: background-color 300ms linear;
        `,
    false: `
        box-shadow: 0px 0px 4px 1px #FFFFFF;
        opacity: 0.4;
        color: #FFFFFF;
        transition: background-color 300ms linear;
        `,
};

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

    &:active {
        -webkit-box-shadow: 0px 0px 16px 1px #33a7f4;
        -moz-box-shadow: 0px 0px 16px 1px #33a7f4;
        -ms-box-shadow: 0px 0px 16px 1px #33a7f4;
        -o-box-shadow: 0px 0px 16px 1px #33a7f4;
        ${({ $Theme }) => shadowDrop[$Theme] || console.log("none Theme")};
    }

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
