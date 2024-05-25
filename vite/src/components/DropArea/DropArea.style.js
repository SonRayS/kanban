import styled from "styled-components";

export const statusDrop = {
    true: `
        width: 220px;
        height: 130px;
        border-radius: 10px;
        align-content: center;
        justify-content: center;
        align-items: center;
        opacity: 1;
        color: #FFFFFF;
        margin-bottom: 16px;
        margin-top: 16px;
        font-size: 23px;
        border: solid #b8bbec 1px;
        `,
    false: `
        opacity: 0;
        color: #FFFFFF;
        `,
};

export const selectionTask = styled.section`
    ${({ $statDrop }) => statusDrop[$statDrop] || console.log("none Theme")};
    p {
        color: #ffffff;
    }
`;
