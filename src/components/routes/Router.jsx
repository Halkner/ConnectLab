// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const Router = () => {

    // const [user, setUser] = useState();

    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}