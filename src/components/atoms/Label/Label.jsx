import PropTypes from "prop-types";
import { StyledLabel } from "./styles";

export const Label = props => {
    return(
        <StyledLabel htmlFor={props.forLabel}>{props.text}</StyledLabel>
    )
}

Label.propTypes = {
    text: PropTypes.string,
    forLabel: PropTypes.string,
}