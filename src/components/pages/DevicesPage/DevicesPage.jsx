import { NewDeviceCard } from "../../organisms/NewDeviceCard"
import { TopBar } from "../../organisms/TopBar"
import { StyledTitle } from "../../organisms/WeatherBox/styles"
import { StyledInput } from "../../atoms/InputComponent/styles"
import { StyledMain, NewDevicesList, NewDevicesContainer, StyledSubTitle} from "./styles"
import {useAuth} from "../../../contexts/Authentication/useAuth";
import {Loading} from "../../organisms/Loading";
import { AddDeviceModal } from "../../organisms/AddDeviceModal"


export const DevicesPage = () => {

    const {allDevicesList, inputFilterDevice, showAddModal} = useAuth();

    return(
        <>
            {!showAddModal ? "" : 
            <AddDeviceModal
            photoURL={showAddModal.photoUrl}
            deviceName={showAddModal.name}/>}
            
            <TopBar/>
            <StyledMain>

                <div className="title-container">
                    <StyledTitle>Dispositivos</StyledTitle>
                    <hr/>
                </div>

                <div className="search-device-container">
                    <StyledSubTitle>Nome do dispositivo</StyledSubTitle>
                    <StyledInput onChange={(e) => inputFilterDevice(e.target.value)}/>
                </div>

                <NewDevicesContainer>
                    <NewDevicesList>
                        {allDevicesList ? allDevicesList.map((dev, index) => (
                            <NewDeviceCard
                            key={index}
                            id={dev._id}
                            deviceName={dev.name}
                            photoURL={dev.photoUrl}/>
                        )) : 
                        <Loading/>}
                    </NewDevicesList>
                </NewDevicesContainer>

            </StyledMain>
        </>
    )
} 