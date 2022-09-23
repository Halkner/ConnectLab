import { StyledWeatherContainer } from "./styles"
import axios from 'axios';
import { useAuth } from "../../../contexts/Authentication/useAuth";
import {ButtonComponent} from '../../atoms/ButtonComponent'

export const WeatherBox = () => {
    const {weather, handleLogout} = useAuth();
    return(
        <>
            <StyledWeatherContainer>
            </StyledWeatherContainer>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}