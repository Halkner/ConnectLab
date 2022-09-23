import PropTypes from "prop-types";

import { AuthenticationContext } from "./AuthenticationContext";
import { useEffect, useState } from "react";
import api from '../../api/api'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LOGIN_URL = "/auth/login"

export const AuthenticationProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("user");
        if (recoveredUser){
            const recoveredWeatherData = sessionStorage.getItem("weatherData")
            setAuth(JSON.parse(recoveredUser));
            setWeather(JSON.parse(recoveredWeatherData));
            // console.log('Weather State: ' + JSON.stringify(weather))
        }
        setLoading(false);
    }, [])

    useEffect(() => {
        console.log(weather);
    }, [weather]);
    

    const openWeather = async (location) =>{
        const id = "dae7a1408ca4a55c4e819cadfb9e33d9"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${id}`;
        const response = await axios.get(url);
        console.log(response.data);
        setWeather(response.data);
        sessionStorage.setItem("weatherData", JSON.stringify(response.data));
    }

    const handleLogin = async (data) => {
        
        const response = await api.post(LOGIN_URL, data);
        
        console.log(response.data);
        
        const accessToken = response?.data?.token;
        const loggedUser = response?.data?.user;
        const userLocation = response?.data?.user?.userAddress?.city;
        
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("location", userLocation)

        api.defaults.headers.Authorization = `Bearer ${accessToken}`;

        openWeather(userLocation);

        setAuth(loggedUser);
        navigate("/");
    }
    
    const handleLogout = () => {
        setAuth(null);
        sessionStorage.removeItem("location")
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        navigate("/login");
    }
    
    const handleRegister = (data) => {
    alert(JSON.stringify(data));
    
    const postFormat = {
            email: data.email,
            password: data.password,
            fullName: data.fullname,
            photoUrl: data.urlPhoto,
            phone: data.phone,
            userAddress: {
                zipCode: data.cep,
                street: data.adress,
                number: data.houseNumber,
                neighborhood: data.neighborhood,
                city: data.city,
                state: data.state,
                complement: data.complement
            }
        };

            api.post("https://connectlab.onrender.com/auth/register", postFormat)
            .then(() => {
                alert(`Usuário ${data.email} cadastrado!`);
            })
            .catch(() => {
                alert(`Falha no cadastro`);
            })
    }
    
    return(
        <AuthenticationContext.Provider value={{handleRegister, handleLogin, isAuthenticated: !!auth, handleLogout, loading, weather}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
};