import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    div{
        display: flex;
        height: 100%;
        align-items: center;
        gap: 1.5rem;
        margin-left: 2em;
    }
    

    ul{
        display: flex;
        margin-right: 2em;
    }

`

export const StyledHeader = styled.header`
    width: 100%;
    height: 150px;
    background-color: #003610;

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