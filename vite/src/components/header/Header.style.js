import styled from "styled-components";

export const MainSubject = {
    white: `
    background-color: #ffffff;
    `,
    dark: `
    background-color: #20202C;
    `,
};

export const StyleHeader = styled.header`
    width: 100%;
    margin: 0 auto;
`;

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const HeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderLogo = styled.div`
    img {
        width: 85px;
    }
`;

export const HoverEffect = {
    hover01: `
        &:hover {
            background-color: #33399b;
        }
    `,
    hover02: `
        &:hover {
            color: #33399b;
        }
        &:hover::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    `,
    hover03: `
        &:hover {
            background-color: #33399b;
            color: #ffffff;
        }

        &:hover: a {
            color: #ffffff;
        }
    `,
};

export const HeaderBtnMainNew = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    a {
        color: #ffffff;
    }

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565eef;

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid #565eef;
        border-bottom: 1.9px solid #565eef;
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;

export const HeaderPopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`;

export const PopUserSet = styled(HeaderPopUserSet)`
    &:target {
        display: block;
    }
`;

export const Checkbox = styled.input``;

export const HeaderBtnMenu = styled.button`
    width: 64px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    a {
        color: #ffffff;
    }

    ${({ $HoverNumber }) => HoverEffect[$HoverNumber] || console.log("Не был передан hoverNumber")};
`;
