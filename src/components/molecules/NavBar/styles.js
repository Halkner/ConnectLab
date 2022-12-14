import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo-container{
        display: flex;
        height: 100%;
        align-items: center;
        gap: 1.5rem;
        margin-left: 2em;
    }
    

    ul{
        height: 100%;
        display: flex;
        align-items:center;
        margin-right: 2em;
    }

    .switch-container{
        height: 100%;
        display: flex;
        align-items: center;
    }

    .switch-container img{
        filter: invert(100%);
        width: 16px;
        margin: 0 10px;
    }
`