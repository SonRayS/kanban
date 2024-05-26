import styled from "styled-components";

export const statusDrop = {
    true: `
    
        border-radius: 10px;
        display:flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        opacity: 1;
        color: #FFFFFF;
        margin-bottom: 8px;
        margin-top: 8px;
        font-size: 23px;
        border: solid #b8bbec 1px;
        padding: 15px
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
