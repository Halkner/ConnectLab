import { DeviceButtonContainer, DeviceCard, DeviceInfoContainer, DeviceItem, DevicePhotoContainer } from "./styles"

import PropTypes from "prop-types";
import { useAuth } from "../../../contexts/Authentication/useAuth";

export const Devices = (props) => {

    const {handleDevice, openDetails} = useAuth();

    return(
        <DeviceItem>
            <DeviceCard>
                <DevicePhotoContainer>
                    <img src={props.photoURL} alt="Device" />
                </DevicePhotoContainer>
                <DeviceInfoContainer>
                    <div className="device-name">
                        {props.deviceName}
                    </div>
                    <div>
                        <p>{props.local} | {props.room} | {props.status}</p>
                    </div>
                </DeviceInfoContainer>
                <DeviceButtonContainer>
                    <button onClick={() => handleDevice(props.id)} className={props.status === "ON" ? "active" : "inactive"}>
                        <img src="./src/assets/power.png" alt="Power on/off button" />
                    </button>

                    <button onClick={() => openDetails(props.id)} className="info-btn">&#128712;</button>
                </DeviceButtonContainer>
            </DeviceCard>
        </DeviceItem>
    )
}

Devices.propTypes = {
    photoURL: PropTypes.string,
    deviceName: PropTypes.string,
    local: PropTypes.string,
    room: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
}