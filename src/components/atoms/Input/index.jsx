import { StyledInput } from "./styles"

import PropTypes from "prop-types";

export const Input = (props) => {

    const {placeholder, type, name} = props;

    return(
        <StyledInput placeholder={placeholder}  type={type} name={name} />
    )
};

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}