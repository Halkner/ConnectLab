import PropTypes from "prop-types";


import { AuthenticationContext } from "./AuthenticationContext";
import { useEffect, useState } from "react";
import axios from '../../api/axios'
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login"

export const AuthenticationProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("user");
        
        if (recoveredUser){
            setAuth(recoveredUser);
        }
    }, [])
    
    
    const handleLogin = async (data) => {
        alert(JSON.stringify(data));
        
        const response = await axios.post(LOGIN_URL, data);
            console.log(response.data);
            
            const accessToken = response?.data?.token;
            const loggedUser = response?.data?.user;
            
            sessionStorage.setItem("user", loggedUser);
            sessionStorage.setItem("token", accessToken);

            axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

            setAuth(loggedUser);
            navigate("/");
    }
    
    const handleLogout = () => {
        setAuth(null);
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        axios.defaults.headers.Authorization = null;
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

            axios.post("https://connectlab.onrender.com/auth/register", postFormat)
            .then(() => {
                alert(`Usuário ${data.email} cadastrado!`);
            })
            .catch(() => {
                alert(`Falha no cadastro`);
            })
    }
    
    return(
        <AuthenticationContext.Provider value={{handleRegister, handleLogin, isAuthenticated: !!auth, handleLogout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
};