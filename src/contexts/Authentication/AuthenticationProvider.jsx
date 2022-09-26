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
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);
    const [userDevicesList, setDevice] = useState(null)
    const [filter, setFilter] = useState(null);
    const [allDevices, setAllDevices] = useState(null);
    const [locals, setLocals] = useState(null);

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("user");
        if (recoveredUser){
            const recoveredLocals = sessionStorage.getItem("locals");
            const recoveredAllDevices = sessionStorage.getItem("allDevices");
            const recoveredToken = sessionStorage.getItem("token");
            const recoveredDevices = sessionStorage.getItem("userDevices");
            const recoveredWeatherData = sessionStorage.getItem("weatherData");
            setLocals(recoveredLocals);
            setToken(recoveredToken);
            setAllDevices(JSON.parse(recoveredAllDevices));
            setDevice(JSON.parse(recoveredDevices));
            setAuth(JSON.parse(recoveredUser));
            setWeather(JSON.parse(recoveredWeatherData));
        }
        setLoading(false);
    }, [])

    const getLocals = async() =>{
        const config = {
            Headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await api.get("/locals", config);

        console.log(response.data);
        setLocals(response.data);
        sessionStorage.setItem("locals", JSON.stringify(response.data))
    }

    const openWeather = async (location) =>{
        const id = "dae7a1408ca4a55c4e819cadfb9e33d9"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${id}&lang=pt_br`;
        const response = await axios.get(url);
        setWeather(response.data);
        sessionStorage.setItem("weatherData", JSON.stringify(response.data));
    }

    const loadUserDevices = async () => {
        const userId = JSON.parse(sessionStorage.getItem("user"))._id;
        const response = await api.get(`/userDevices/user/${userId}`);
        const data = response.data;

        setDevice(data);
        sessionStorage.setItem("userDevices", JSON.stringify(data));
    }


    const handleDevice = (id) => {

        const findDevice = userDevicesList.find((dev) => dev._id === id);
        const deviceStatus = findDevice.is_on;

        const data = {
            "is_on": !deviceStatus,
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        api.put(`/userDevices/${id}`, data, config)
        .then(() =>{
            loadUserDevices();

        })
        .catch((err) => {
            console.log(err);
        })
    }

    const DeviceOptions = async() => {
        const config = {
            Headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await api.get("/devices", config);
        console.log(response);

        setAllDevices(response.data)
        sessionStorage.setItem("allDevices", JSON.stringify(response.data));

    }

    const handleFilter = (query) => {
        if(query === filter){
            setFilter(null)
        }else{
            setFilter(query);
        }
        
    }

    const [inputFilter, setinputFilter] = useState(null);

    const inputFilterDevice = (query) => {
        if(query) {
            setinputFilter(query);
        }else{
            setinputFilter(null);
        }
    }

    const allDevicesList = inputFilter ? allDevices.filter((dev) => dev.name.toLowerCase().includes(inputFilter.toLowerCase())) : allDevices

    const handleLogin = async (data) => {
        
        const response = await api.post(LOGIN_URL, data);
        
        const accessToken = response?.data?.token;
        const loggedUser = response?.data?.user;
        const userLocation = response?.data?.user?.userAddress?.city;
        
        sessionStorage.setItem("user", JSON.stringify(loggedUser));
        sessionStorage.setItem("token", accessToken);

        api.defaults.headers.Authorization = `Bearer ${accessToken}`;

        setToken(accessToken);
        setAuth(loggedUser);
        
        openWeather(userLocation);
        loadUserDevices();
        DeviceOptions();
        getLocals();
        navigate("/");
    }

    const filteredDevices = filter ? userDevicesList.filter((device) => device.local.description.includes(filter)) : userDevicesList
    
    const handleLogout = () => {
        setAuth(null);
        sessionStorage.removeItem("weatherData")
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("locals");
        sessionStorage.removeItem("allDevices");
        sessionStorage.removeItem("userDevices");
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

            api.post("/auth/register", postFormat)
            .then(() => {
                alert(`Usuário ${data.email} cadastrado!`);
            })
            .catch(() => {
                alert(`Falha no cadastro`);
            })
    }
    

    const [showAddModal, setShowAddModal] = useState(null);

    const openAddModal = (id) => {
        console.log(allDevices.find((dev) => dev._id === id));
        const deviceToAdd = allDevices.find((dev) => dev._id === id);

        setShowAddModal(deviceToAdd);
    }

    const closeAddModal = () => {
        setShowAddModal(null);
    }

    const addDevice = async (data) => {

        const localId = locals.find((loc) => loc.description === data.local)._id

        const config = {
            Headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": `application/json`
            }
        }

        const body = {
            "user": auth._id,
            "device": showAddModal._id,
            "is_on": false,
            "local": localId,
            "room": data.room,
        }


        const response = await api.post("/userDevices", body, config);

        loadUserDevices();
        setShowAddModal(null);

    }



    const updateUser = async() => {
        const config = {
            Headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const response = await api.get(`/users/${auth._id}`, config)
        
        setAuth(response.data)
    }

    
    const EditUser = (data) => {
        alert(JSON.stringify(data));
    
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }

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

            api.put(`/users/${auth._id}`, postFormat, config)
            .then(() => {
                alert(`Usuário ${data.email} editado!`);
            })
            .catch(() => {
                alert(`Falha na edição`);
            })
        }



        const [showDeviceDetails, setShowDeviceDetails] = useState(null);

        const closeDetails = () => {
            setShowDeviceDetails(null);
        }

        const openDetails = (id) => {
            console.log(userDevicesList.find((dev) => dev._id === id));
            const deviceToAdd = userDevicesList.find((dev) => dev._id === id);

            setShowDeviceDetails(deviceToAdd);
        }


        const deleteDevice = async(id) => {

            const config = {
                Headers: {
                    "Authorization": "Bearer token",
                    "Content-Type": "application/json",
                }
            }

            const response = await api.delete(`/userDevices/${id}`, config);

            loadUserDevices();
            setShowDeviceDetails(null);
        }


        return(
            <AuthenticationContext.Provider 
            value={{handleRegister,
             handleLogin, 
             isAuthenticated: !!auth, 
             handleLogout, 
             loading, 
             weather, 
             handleFilter, 
             filteredDevices, 
             userDevicesList, 
             filter, 
             handleDevice, 
             DeviceOptions, 
             allDevicesList, 
             inputFilterDevice, 
             openAddModal, 
             showAddModal, 
             closeAddModal, 
             locals, addDevice, 
             auth, 
             EditUser, 
             updateUser, 
             showDeviceDetails,
             openDetails,
             deleteDevice,
             closeDetails}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
};