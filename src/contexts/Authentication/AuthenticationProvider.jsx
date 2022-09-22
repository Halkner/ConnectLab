import PropTypes from "prop-types";


import { AuthenticationContext } from "./AuthenticationContext";
import { useEffect, useState } from "react";
import api from '../../api/api'
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login"

export const AuthenticationProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('');

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("user");
        if (recoveredUser){
            const userLocation = recoveredUser.userAddress.city;
            setAuth(JSON.parse(recoveredUser));
            setLocation(userLocation)
        }
        setLoading(false);
    }, [])
    
    
    const handleLogin = async (data) => {
        alert(JSON.stringify(data));
        
        const response = await api.post(LOGIN_URL, data);
        
        console.log(response.data);
        
        const accessToken = response?.data?.token;
        const loggedUser = response?.data?.user;
        const userLocation = response?.data?.user?.userAddress?.city;
        
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setLocation("location", userLocation)

        api.defaults.headers.Authorization = `Bearer ${accessToken}`;

        setLocation(userLocation);
        setAuth(loggedUser);
        navigate("/");
    }
    
    const handleLogout = () => {
        setAuth(null);
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
        <AuthenticationContext.Provider value={{handleRegister, handleLogin, isAuthenticated: !!auth, handleLogout, loading, location}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
};