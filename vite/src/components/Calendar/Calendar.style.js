import styled from "styled-components";
import { SwitchThemeText, SwitchThemeBtn } from "../GlobalStyle/Global.style";

export const CalendarText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    margin: 20px 0px 20px 0px;
`;

export const CalendarDivBlock = styled.div`
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")};
`;
