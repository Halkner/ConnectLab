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
`

export const StyledContentBox = styled.div`
    width: 90%;
    height: 90%;
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 25px;
    font-weight: 600;
`