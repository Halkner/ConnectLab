import styled from "styled-components";
import { StyledButton } from "../../atoms/ButtonComponent/styles";

export const StyledDevicesItem = styled.li`
    margin-top: 1em;
    width: 100%;
    display: flex;
    justify-content: center;
    
`

export const StyledDevicePhoto = styled.img`
    width: 100px;
`

export const BoxContent = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    .device-photo-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2em;
    }

    .device-button-container{
        ${StyledButton}{
            color: white;
            border: none;
            background-color: #00C23A;
        }

        ${StyledButton}:hover{
            background-color: #00a335;
        }
    }
`

export const StyledDeviceTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-top: 1em;
    text-align: center;
`