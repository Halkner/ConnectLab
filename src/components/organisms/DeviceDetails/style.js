import styled from "styled-components";
import { StyledButton } from "../../atoms/ButtonComponent/styles";
import { StyledTitle } from "../WeatherBox/styles";

export const ModalOverlay = styled.div`
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const StyledDeviceDetails = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledDeviceContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${StyledTitle}{
        margin-top: 1.5em;
        font-size: 25px;
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledSubTitle = styled.h2`
    font-size: 18px;
    margin-top: 1em;
`

export const StyledImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2em;
`

export const StyledImg = styled.img`
    width: 100px;
`
export const StyledStatusContainer = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    margin-top: 2em;

    span{
        font-size: 18px;
    }

    button{
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.colors.secondaryColor}
    }

    .inactive{
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.secondaryColor};
        border-radius: 50px;
    }
    .inactive:hover{
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }
    
    .active{
        border-radius: 50px;
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }


    button:hover img{
        filter: invert(100);
    }
    img{
        padding-top: 4px;
        width: 15px;
    }
`

export const StyledInfosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr{
        width: 100%;
    }
    ${StyledSubTitle}{
        margin-top: 2em;
        font-weight: bold;
    }
`

export const StyledInfo = styled.div`
    width: 100%;
    margin-top: 1em;
    line-height: 20px;
    
    strong{
        font-weight: bold;
    }
`

export const StyledButtonContainer = styled.div`

    margin-top: 1em;

    ${StyledButton}{
        color: white;
        background-color: ${({theme}) => theme.colors.cancelColor};

        &:hover{
            background-color: red;
        }
    }
`
