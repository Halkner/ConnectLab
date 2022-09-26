import { useAuth } from '../../../contexts/Authentication/useAuth'
import { DeviceDetails } from '../../organisms/DeviceDetails'
import { Loading } from '../../organisms/Loading'
import { TopBar } from "../../organisms/TopBar"
import { UserDevices } from '../../organisms/UserDevices'
import { WeatherBox } from '../../organisms/WeatherBox'
import { MainHome, WeatherContainer } from './styles'

export const Home = () => {

    const {weather, handleLogout, loading, showDeviceDetails} = useAuth();

    return(
        <>
            {showDeviceDetails && 
            <DeviceDetails
            id={showDeviceDetails._id}
            deviceName={showDeviceDetails.device.name}
            photoURL={showDeviceDetails.device.photoUrl}
            status={showDeviceDetails.is_on ? "ligado" : "desligado"}
            virtualID={showDeviceDetails.device.info.virtual_id}
            ip={showDeviceDetails.device.info.ip_address}
            mac={showDeviceDetails.device.info.mac_address}
            local={showDeviceDetails.local.description}
            signal={showDeviceDetails.device.info.signal}/>}

            <TopBar/>
            {loading ? '' :
            <MainHome>
                <WeatherContainer>
                    {weather ? <WeatherBox/> : <Loading/>}
                </WeatherContainer>

                <UserDevices/>
            </MainHome>}
        </>
    )
}