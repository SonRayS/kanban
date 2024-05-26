import styled from "styled-components";

export const statusDrop = {
    true: `
        width: 220px;
        height: 130px;
        border-radius: 10px;
        display:flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        opacity: 1;
        color: #FFFFFF;
        margin-bottom: 8px;
        margin-top: 20px;
        font-size: 23px;
        border: solid #b8bbec 1px;
        padding: 20px
        columns: #FFFFFF
        transition: all 0.3s ease-in-out;
        `,
    false: `
        opacity: 0;
       
        `,
};

export const selectionTask = styled.section`
    ${({ $statDrop }) => statusDrop[$statDrop] || console.log("none Theme")};
    p {
        color: #ffffff;
    }
`;
