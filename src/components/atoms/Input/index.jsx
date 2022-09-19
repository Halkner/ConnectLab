import { StyledInput } from "./styles"
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";

export const Input = props => {

    const {register} = useForm();
    
    return(
        <StyledInput 
        placeholder={props.placeholder} 
        value={props.value} 
        type={props.type}
        required={props.req}
        minLength={props.minLength}
        maxLength={props.maxLength}
        name={props.inputName}/>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    req: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    inputName: PropTypes.string,
}