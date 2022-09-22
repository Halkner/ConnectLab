import { useEffect } from "react"
import { StyledWeatherContainer } from "./styles"
import axios from 'axios';
import { useAuth } from "../../../contexts/Authentication/useAuth";


export const WeatherBox = () => {

    const { location } = useAuth()

    const key = "dae7a1408ca4a55c4e819cadfb9e33d9";
    const url = `https://api.openweathermap.org/data/3.0/weather?q=${location}&units=imperial&appid=${key}`;
    
    const openWeather = () =>{
        axios.get(url)
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <>
            <StyledWeatherContainer>

            </StyledWeatherContainer>
        </>
    )
}