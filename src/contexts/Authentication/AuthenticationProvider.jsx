import PropTypes from "prop-types";
import axios from 'axios'

import { AuthenticationContext } from "./AuthenticationContext";
import { useState } from "react";

export const AuthenticationProvider = ({ children }) => {

    

    const handleRegister = (data) => {
        alert(JSON.stringify(data))

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
        }

            axios.post("https://connectlab.onrender.com/auth/register", postFormat)
            .then(() => {
            alert(`Usuário ${data.email} autenticado!`)
            })
            .catch(() => {
            alert(`Falha no cadastro`)
            })
    }

    const {user, setUser} = useState(null)

    const handleLogin = (data) => {
        alert(JSON.stringify(data));

        const postFormat = {
            email: data.loginEmail,
            password: data.loginPassword,
        }

        axios.post("https://connectlab.onrender.com/auth/login", postFormat)
        .then(() => {
            alert(`Usuário ${data.loginEmail} autenticado!`)
            setUser({
                token: data.token,
                id: data.id, 
                email: data.loginEmail
            });
            console.log(user);
        })
        .catch(() => {
            alert(`O usuário ${data.loginEmail} e/ou senha não existem!`)
        })

    }

    const handleLogout = () => {
        setUser(null)
    }

    return(
        <AuthenticationContext.Provider value={{handleRegister, handleLogin, isAuthenticated: !!user, handleLogout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
  };