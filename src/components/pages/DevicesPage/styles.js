import styled from "styled-components";
import { StyledTitle } from "../../organisms/WeatherBox/styles"

export const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-container{
        width: 90%;
    }

    .search-device-container{
        width: 90%;
    }

    ${StyledTitle}{
        margin-top: 3em;
        color: #00C23A;
    }
`

export const StyledSubTitle = styled.h2`
    font-size: 18px;
    margin-top: 3em;
    margin-bottom: 10px;
    font-weight: 600;
    color: #00a335;
`

export const NewDevicesContainer = styled.div`
    width: 90%;
`

export const NewDevicesList = styled.ul`
width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr)
`