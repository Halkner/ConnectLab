import styled from "styled-components";
import { StyledInput } from "../../atoms/InputComponent/styles";
import {StyledTitle} from "../../atoms/TitleComponent/styles"


export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`

export const ModalContainer = styled.div`
    min-width: 500px;
    height: 95%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    position: relative;
    z-index: 10;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${StyledTitle} {
        margin-top: 3rem;
        margin-bottom: 4rem;
        color: #3e5055;
    }

    ${StyledInput}{
        margin: 10px 0;
    }

    .modal-content{
        display:flex;
        flex-direction: column;
        align-items:center;
        width: 80%;
        height: 80%;
    }

    .modal-content form{
        width: 100%;
        height: 100%;
    }

    .button-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem 0;
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