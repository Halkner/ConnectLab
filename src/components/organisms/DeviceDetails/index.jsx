import { HeaderContainer, ModalOverlay, StyledButtonContainer, StyledDeviceContainer, StyledDeviceDetails, StyledImg, StyledImgContainer, StyledInfo, StyledInfosContainer, StyledStatusContainer, StyledSubTitle } from "./style"
import { Box } from "../../atoms/Box"
import { StyledTitle } from "../WeatherBox/styles"
import { useAuth } from "../../../contexts/Authentication/useAuth"
import {StyledButton} from "../../atoms/ButtonComponent/styles"


import PropTypes from "prop-types";

export const DeviceDetails = (props) => {

    const {handleDevice, deleteDevice} = useAuth();

    return(
        <ModalOverlay>
            <Box width="350px" height="80%">
                <StyledDeviceDetails>

                    <StyledDeviceContainer>
                        <HeaderContainer>
                            <StyledTitle>{props.deviceName}</StyledTitle>
                            <StyledSubTitle>Intelbras</StyledSubTitle>
                        </HeaderContainer>

                        <StyledImgContainer>
                            <StyledImg src={props.photoURL} alt="Device"/>
                        </StyledImgContainer>

                        <StyledStatusContainer>
                            <span>Dispositivo {props.status}</span>
                            <button onClick={() => handleDevice(props.id)} className={props.status === "ligado" ? "active" : "inactive"}>
                                <img src="./src/assets/power.png" alt="Power on/off button" />
                            </button>
                        </StyledStatusContainer>

                        <StyledInfosContainer>
                            <StyledSubTitle>Informações do dispositivo</StyledSubTitle>
                            <hr />
                            <StyledInfo>
                                <p><strong>ID virtual: </strong> {props.virtualID}</p>
                                <p><strong>Endereço IP: </strong> {props.ip}</p>
                                <p><strong>Endereço MAC: </strong> {props.mac}</p>
                                <p><strong>Local: </strong> {props.local}</p>
                                <p><strong>Força do sinal: </strong> {props.signal}</p>
                            </StyledInfo>
                        </StyledInfosContainer>
                        <StyledButtonContainer>
                            <StyledButton onClick={() => deleteDevice(props.id)}>Remover</StyledButton>
                        </StyledButtonContainer>
                    </StyledDeviceContainer>

                </StyledDeviceDetails>
            </Box>
        </ModalOverlay>
    )

}

DeviceDetails.propTypes = {
    photoURL: PropTypes.string,
    deviceName: PropTypes.string,
    local: PropTypes.string,
    virtualID: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
    ip: PropTypes.string,
    mac: PropTypes.string,
    signal: PropTypes.string,
}