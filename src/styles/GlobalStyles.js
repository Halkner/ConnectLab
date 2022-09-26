import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        font-family: 'Nunito Sans', sans-serif;
        text-decoration: none;
    }

    a{
        color:#00A335;
    }

    a:visited{
        color: #00A335;
    }

    body{
        background-color: ${({theme}) => theme.colors.mainBackground };
    }

`