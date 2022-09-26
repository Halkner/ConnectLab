import { StyledOverlay, StyledContainer, StyledImg, StyledSelect, StyledLabel, SelectContainer, InputContainer, BtnContainer} from "./styles";
import { Box } from "../../atoms/Box";
import { useAuth } from "../../../contexts/Authentication/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import PropTypes from "prop-types";
import { StyledTitle } from "../../atoms/TitleComponent/styles";
import { StyledInput } from "../../atoms/InputComponent/styles";
import { StyledButton } from "../../atoms/ButtonComponent/styles";


export const AddDeviceModal = (props) => {

    const {closeAddModal, locals, addDevice} = useAuth();


    const validationForm = yup.object().shape({
        
    })


    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationForm)
    });

    return(
        <StyledOverlay>
            <Box width="400px" height="70%">
                <StyledContainer>
                    <StyledImg src={props.photoURL} alt="Device"/>
                    <StyledTitle>{props.deviceName}</StyledTitle>
                    <form onSubmit={handleSubmit(addDevice)}>
                        <SelectContainer>
                            <StyledLabel htmlFor="local">Local*</StyledLabel>
                            <StyledSelect defaultValue="" name="local" placeholder="Selecione o local" {...register("local")}>
                                <option value="" disabled>Selecione o local</option>
                                {!locals ? "" : locals.map((loc, index) => (
                                    <option key={index} value={loc.description}>{loc.description}</option>
                                ))}
                            </StyledSelect>
                        </SelectContainer>
                        <InputContainer>
                            <StyledLabel>Cômodo*</StyledLabel>
                            <StyledInput placeholder="Digite o nome do cômodo" name="room" {...register("room")}/>
                        </InputContainer>
                        <BtnContainer>
                            <StyledButton className="cancel-btn" onClick={closeAddModal}>Cancelar</StyledButton>
                            <StyledButton className="submit-btn" type="submit">Confirmar</StyledButton>
                        </BtnContainer>
                    </form>
                </StyledContainer>
            </Box>
        </StyledOverlay>
    )
}


AddDeviceModal.propTypes = {
    photoURL: PropTypes.string,
    deviceName: PropTypes.string,
    id: PropTypes.string,
}