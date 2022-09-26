import styled from "styled-components";

export const StyledWeatherContainer = styled.div`
    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    /* overflow: hidden; */
    margin-top: 3em;
    width: 90%;
    height: 300px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    transition: all 0.3s;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
`

export const StyledContentBox = styled.div`
    width: 95%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.1);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .city-container{
        height: 25%;
        width: 20%;
        display: flex;
        align-items:center;
        justify-content: center;
    }

    .city-container img{
        width: 23px;
        filter: invert(100%);
    }

    .temperature-container{
        height: 30%;
        width: 20%;
        display: flex;
        align-items:center;
        justify-content: center;
    }

    .weather-status-container{
        height: 30%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 0 5px;
    display:inline-block;
`

export const StyledTemperature = styled.span`
    font-size: 60px;
    font-weight: 600;
    text-shadow: 2px 1px black;
`

export const StyledStatus = styled.span`
    font-size: 30px;
    margin-left: 1em;
    img {
        width: 25px;
        filter: invert(100%);
        margin-right: 10px;
    }
`

export const StyledHumidity = styled.span`
    margin-right: 1em;
    font-size: 30px;

    img{
        margin-right: 10px;
        width: 23px;
        filter: invert(100%);
    }
`
