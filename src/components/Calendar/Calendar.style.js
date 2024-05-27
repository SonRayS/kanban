import styled from "styled-components";
import { SwitchThemeText, SwitchThemeBtn } from "../GlobalStyle/Global.style";

export const CalendarText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    margin: 20px 0px 20px 0px;
`;

export const DisableCalendar = {
    true: `
    opacity: 0.5;
    color: #565eef;
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: #94a6be;
    }
    `,

    false: `
    color: #FFFFFF;
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
        background-color: #565eef;
    }
    `,
};

export const CalendarDivBlock = styled.div`
    ${({ $Disabled }) => DisableCalendar[$Disabled] || console.log("none Theme")};
    ${({ $Theme }) => SwitchThemeText[$Theme] || console.log("none Theme")};
`;
