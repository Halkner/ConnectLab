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

`

export const ItemMenu = styled.li`
    margin-right: 1.5rem;
    font-size: 20px;
    color: #00A335;
    transition: all 0.5s;
    padding: 10px;

    &:hover{
        color: #FFFFFF;
        cursor:pointer;
    }
`