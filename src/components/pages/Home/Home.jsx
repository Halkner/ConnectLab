// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=dae7a1408ca4a55c4e819cadfb9e33d9
import axios from 'axios'
import { useState, useEffect } from "react"
import { useAuth } from '../../../contexts/Authentication/useAuth'
import { TopBar } from "../../organisms/TopBar"
import { WeatherBox } from '../../organisms/WeatherBox'
import { MainHome } from './styles'

export const Home = () => {

    const {weather} = useAuth();

    return(
        <>
            <TopBar/>
            <MainHome>
                {weather ? <WeatherBox/> : "Carregando..."}
            </MainHome>
        </>
    )
}