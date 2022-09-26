import { Box } from "../../atoms/Box";
import { StyledButton } from "../../atoms/ButtonComponent/styles";
import { StyledDevicesItem, StyledDevicePhoto, BoxContent, StyledDeviceTitle } from "./styles";

import PropTypes from "prop-types";
import { useAuth } from "../../../contexts/Authentication/useAuth";

export const NewDeviceCard = (props) => {

    const {openAddModal} = useAuth();

    return(
        <>
            <StyledDevicesItem>
                <Box width="400px" height="350px" margin="2em 0">
                    <BoxContent>
                        <div className="device-photo-container">
                            <StyledDevicePhoto src={props.photoURL} alt="Device"/>
                            <StyledDeviceTitle>{props.deviceName}</StyledDeviceTitle>
                        </div>
                        <div className="device-button-container">
                            <StyledButton onClick={() => openAddModal(props.id)}>Adicionar</StyledButton>
                        </div>
                    </BoxContent>
                </Box>
            </StyledDevicesItem>
        </>
    )
}

NewDeviceCard.propTypes = {
    photoURL: PropTypes.string,
    deviceName: PropTypes.string,
    id: PropTypes.string,
}