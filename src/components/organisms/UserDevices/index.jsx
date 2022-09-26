import { useAuth } from "../../../contexts/Authentication/useAuth"
import { Devices } from "../../molecules/Devices"
import { UserLocals } from "../../molecules/UserLocals/index."
import { ShowDevicesContainer, DevicesContainer, DevicesList } from "./styles"

export const UserDevices = () => {

    const {filteredDevices, userDevicesList} = useAuth();

    return(
        <ShowDevicesContainer>
            <UserLocals/>

            <DevicesContainer>
                <DevicesList>
                    {userDevicesList ? filteredDevices.map((d, index) => (
                        <Devices
                        key={index}
                        id={d._id}
                        photoURL={d.device.photoUrl}
                        deviceName={d.device.name}
                        local={d.local.description}
                        room={d.room}
                        status={d.is_on ? "ON" : "OFF"}/>
                    ))
                    : "Procurando dispositivos do usuário..."}
                </DevicesList>
            </DevicesContainer>

        </ShowDevicesContainer>
    )
}