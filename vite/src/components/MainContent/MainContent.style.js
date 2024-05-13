import styled from "styled-components";
import { SwitchThemeBackGroundTask } from "../GlobalStyle/Global.style";

export const Main = styled.main`
    width: 100%;
    ${({ $Theme }) => SwitchThemeBackGroundTask[$Theme] || console.log("none Theme")};
`;
export const MainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`;
export const MainContents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: row;
    @media screen and (max-width: 1200px) {
        display: block;
    }
`;
