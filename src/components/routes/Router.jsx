import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../contexts/Authentication/useAuth";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { DevicesPage } from "../pages/DevicesPage/DevicesPage";
import PropTypes from "prop-types";
import { Profile } from "../pages/Profile/Profile";

export const Router = () => {
    
    const Private = ({ children }) => {
        const {isAuthenticated, loading} = useAuth();

        if(loading){
            return <h1>Carregando...</h1>
        }

        return isAuthenticated ? children : <Navigate to="/login"/>
    }

    return(
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Private> <Home /> </Private>}/>
            <Route exact path="/devices" element={<Private> <DevicesPage/> </Private>}/>
            <Route exact path="/me" element={<Private> <Profile/> </Private>}/>
        </Routes>
    )
}

Router.propTypes = {
    children: PropTypes.node,
}