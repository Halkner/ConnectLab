import { StyledInput } from "./styles"

import PropTypes from "prop-types";

export const InputComponent = (props) => {

    const {placeholder, type, name} = props;

    return(
        <StyledInput placeholder={placeholder}  type={type} name={name} />
    )
};

InputComponent.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}