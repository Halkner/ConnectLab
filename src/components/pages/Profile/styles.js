import styled from "styled-components";
import { StyledButton } from "../../atoms/ButtonComponent/styles";
import { StyledTitle } from "../../atoms/TitleComponent/styles";

export const StyledMain = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.colors.fontColor};
`

export const StyledProfileContent = styled.div`
    width: 90%;
    hr{
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
`

export const StyledPhotoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${StyledTitle}{
        font-size: 30px;
    }
`

export const StyledPhotoPortrait = styled.div`
    box-shadow: 0px 0px 24px 1px #007a08;
    margin-top: 2em;
    position: relative;
    border: solid 1px black;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;

    img{
        position: absolute;
        width: 200px;
    }
`

export const StyledInfosContainer = styled.div`
    width: 100%;
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr{
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
`

export const StyledSubTitle = styled.h2`
    font-size: 25px;
    font-weight: bold;
`

export const StyledInfos = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4em;
    gap: 10em;
    font-size: 20px;

    p{
        line-height: 30px;
    }

    strong{
        font-weight: bold;
    }
`

export const StyledBtnContainer = styled.div`
    margin: 3em 0;
    display: flex;
    gap: 3em;

    ${StyledButton}{
        background-color: ${({theme}) => theme.colors.primaryColor};
        color: white;

        &:hover{
            background-color: ${({theme}) => theme.colors.secondaryColor};
        }
    }
`

export const StyledBtnLogout = styled.button`
    cursor: pointer;
    width: 130px;
    min-height: 40px;
    border-radius: 3px;
    border: none;
    background-color: ${({theme}) => theme.colors.cancelColor};
    color: white;

    &:hover{
        background-color: red;
    }
`