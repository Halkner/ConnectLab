import PropTypes from "prop-types";
import axios from 'axios'

import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticationProvider = ({ children }) => {

    const handleRegister = data => {
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

    return(
        <AuthenticationContext.Provider value={{handleRegister}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
  };