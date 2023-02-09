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
    width: 25rem;
    height: 25rem;
    box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.4);
    background-color: ${props => props.theme.colors.mainBackground};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${StyledTitle} {
        line-height: 3.5rem;
        color: ${props => props.theme.colors.fontColor};
    }

    ${StyledInput}{
        margin: 10px 0;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 80%;
    }

    .button-container{
        display: flex;
        justify-content: center;
        margin-top: 2em;
    }

    .button-container span{
        cursor: pointer;
    }
`