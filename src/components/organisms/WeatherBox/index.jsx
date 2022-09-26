import { StyledWeatherContainer, StyledTitle, StyledContentBox, StyledTemperature, StyledStatus, StyledHumidity } from "./styles"
import { useAuth } from "../../../contexts/Authentication/useAuth";

export const WeatherBox = () => {
    const {weather} = useAuth();

    const setBackground = (weatherState) =>{
        switch (weatherState.weather[0].main){
            case ("Thunderstorm"):
                return "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";

            case ("Clouds"):
                return "https://i.pinimg.com/originals/07/2c/36/072c36e22506f6e77d5670dd1cd29942.jpg";

            case ("Rain" || "Drizzle"):
                return "https://wallpaperaccess.com/full/134855.jpg";

            case ("Snow"):
                return "https://images.hdqwalls.com/wallpapers/starry-night-snow-covered-mountains-4k-ya.jpg";

            case ("Mist"):
                return "https://c0.wallpaperflare.com/preview/865/362/391/bare-trees-during-nighttime.jpg";
            
            case ("Smoke"):
                return "https://c0.wallpaperflare.com/preview/992/147/619/weather-smoke-smog-pollution.jpg";

            case ("Haze"):
                return "https://wallpapercrafter.com/sizes/2560x1440/6419-road-fog-trees-nature-4k.jpg";

            case ("Fog"):
                return "https://c0.wallpaperflare.com/preview/786/347/690/4k-wallpaper-conifers-desktop-wallpaper-environment.jpg";

            case ("Sand"):
                return "https://t3.ftcdn.net/jpg/05/25/44/78/360_F_525447860_WFEEYZG0w5COLTJhMe03dXWinETvpVra.jpg";

            case ("Dust"):
                return "https://wallpapercave.com/wp/wp11342194.jpg";

            case ("Ash"):
                return "https://c1.wallpaperflare.com/preview/933/389/114/ash-cloud-cloud-cloudy-daylight.jpg";

            case ("Squall"):
                return "https://c1.wallpaperflare.com/preview/522/846/489/super-cell-shelf-cloud-squall-line-storm-front.jpg";

            case ("Tornado"):
                return "https://c4.wallpaperflare.com/wallpaper/206/80/915/tornado-wallpaper-preview.jpg";

            case ("Clear"):
                return "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80ar";

            default:
                return 'Falhou em buscar o local! :(';
        }
    }

    return(
        <>
            <StyledWeatherContainer bg={setBackground(weather)}>
                <StyledContentBox>
                    <div className="city-container">
                        <img src="https://cdn-icons-png.flaticon.com/512/44/44334.png" alt="Local icon"/>
                        <StyledTitle>{weather.name}</StyledTitle>
                    </div>
                    <div className="temperature-container">
                        <StyledTemperature>
                            {Math.round(weather.main.temp) + "º"}
                        </StyledTemperature>
                    </div>
                    <div className="weather-status-container">
                        <StyledStatus>
                        <img src="https://cdn-icons-png.flaticon.com/512/2932/2932449.png" alt="Status clima icon"/>
                            {weather.weather[0].main}
                        </StyledStatus>
                        <StyledHumidity>
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219816.png" alt="Local icon"/>
                            {weather.main.humidity + "%"}
                        </StyledHumidity>
                    </div>
                </StyledContentBox>
            </StyledWeatherContainer>
        </>
    )
}