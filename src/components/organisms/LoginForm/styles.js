import styled from "styled-components";
import { StyledInput } from "../../atoms/InputComponent/styles";
import {StyledTitle} from "../../atoms/TitleComponent/styles"


export const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    max-width: 400px;
    width: 90%;
    height: 70%;
    box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    position: relative;
    z-index: 10;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${StyledTitle} {
        margin-top: 3rem;
        margin-bottom: 2rem;
        color: #3e5055;
    }

    ${StyledInput}{
        margin: 10px 0;
    }

    .content{
        display:flex;
        flex-direction: column;
        align-items:center;
        width: 80%;
        height: 80%;
    }

    .content form{
        width: 100%;
        height: 100%;
    }

    .button-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem 0;
        margin-top: 2em;
    }

    .button-container span{
        cursor: pointer;
    }



`

export const CloseModalButton = styled.span`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25px;
    height: 25px;
    text-align: center;
    transition: all 0.15s ease-in;

    &:hover{
        color: red;
    }

`