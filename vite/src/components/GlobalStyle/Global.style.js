import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    *::before,*::after {
        box-sizing: border-box;
    }
    
    a,a:visited {
        text-decoration: none;
        cursor: pointer;
    }
    
    button,
    ._btn {
        cursor: pointer;
        outline: none;
    }
    
    ul li {
        list-style: none;
    }

    html,body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    }
    
    html[data-theme="false"] {
        background-color: #202229;
        color: white;
        transition: background-color 300ms linear;
    }
    
    html[data-theme="true"] {
        background-color: #FFFFFF;
        color: black;
        transition: background-color 300ms linear;
    }
    
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;

export const SwitchThemeLink = {
    true: `
    color: #565eef;
    transition: background-color 300ms linear;
    `,
    false: `
    color: #FFFFFF;
    transition: background-color 300ms linear;
    `,
};

export const SwitchThemeText = {
    true: `
    color: #000000;
    transition: background-color 300ms linear;
    `,
    false: `
    color: #FFFFFF;
    transition: background-color 300ms linear;
    `,
};

export const SwitchThemeBG = {
    true: `
    background-color: #FFFFFF;
    transition: background-color 300ms linear;
    `,
    false: `
    background-color: #20202C;
    transition: background-color 300ms linear;
    `,
};

export const SwitchThemeBtn = {
    true: `
    border-color: rgb(26, 56, 101);
    background-color: transparent;
    transition: background-color 300ms linear;
        a {
            color: rgb(26, 56, 101);
        }
    `,
    false: `
    border-color: #FFFFFF;
    background-color: transparent;
    transition: background-color 300ms linear;
        a {
            color: #FFFFFF;
        }
    `,
};

export const SwitchThemeBackGroundTask = {
    true: `
    background-color: #565eef;
    transition: background-color 300ms linear;
    `,
    false: `
    background-color: #202229;
    transition: background-color 300ms linear;
    `,
};

export const SwitchThemeIco = {
    true: `
    background-image: url("../../../public/moon.png");
    transition: background-color 300ms linear;
    `,
    false: `
    background-image: url("../../../public/sun.png");
    transition: background-color 300ms linear;
    `,
};

export const SwitchThemeDescription = {
    true: `
    color: #565eef;
    transition: background-color 300ms linear;
    `,
    false: `
    color: #4e5566;
    transition: background-color 300ms linear;
    `,
};
