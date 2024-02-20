import styled from "styled-components";

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
