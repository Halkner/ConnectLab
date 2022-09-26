import styled from "styled-components";
import { StyledInput } from "../../atoms/InputComponent/styles";
import { StyledTitle } from "../../atoms/TitleComponent/styles";

export const StyledOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2em;
    }

    ${StyledTitle}{
        margin-top: 1.5em;
    }
    
`

export const SelectContainer = styled.div`
    width: 80%;
`

export const InputContainer = styled.div`
    width: 80%;
    margin-top: 1em;

    ${StyledInput}{
        box-sizing: border-box;
        margin-top: 5px;
        width: 100%;
        height: 40px;
        padding: 5px;
    }

`

export const BtnContainer = styled.div`
    margin-top: 2em;
    width: 80%;
    display: flex;
    justify-content: space-between;

    .cancel-btn:hover{
        background-color: ${({theme}) => theme.colors.cancelColor};
        color: white;
    }

    .submit-btn{
        background-color: ${({theme}) => theme.colors.primaryColor};
        color: white;
    }

    .submit-btn:hover{
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }
`

export const StyledLabel = styled.label`
    color: ${({theme}) => theme.colors.primaryColor};
`

export const StyledImg = styled.img`
    margin-top: 2em;
    width: 100px;
`

export const StyledSelect = styled.select`
    margin-top: 5px;
    width: 100%;
    height: 40px;
    outline: none;
    padding: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.3);

    &:focus, &:hover{
        border-color: ${({theme}) => theme.colors.borderColor};
    }
`