import styled from "styled-components";

export const Loading = styled.div`
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    color: rgb(110, 110, 110);
    margin-top: 64px;
    li {
        margin-bottom: 16px;
    }
    img {
        width: 64px;
        height: 64px;
    }
`;
