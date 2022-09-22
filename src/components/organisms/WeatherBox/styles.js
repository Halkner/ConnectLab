import styled from "styled-components";

export const StyledWeatherContainer = styled.div`
    margin-top: 3em;
    width: 90%;
    height: 300px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    transition: all 0.3s;
    border-radius: 3px;

    &:hover{
        transform: scale(1.006);
        cursor: pointer;
    }
`