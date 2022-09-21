import PropTypes from "prop-types";
import { StyledLabel } from "./styles";

export const LabelComponent = props => {
    return(
        <StyledLabel htmlFor={props.forLabel}>{props.text}</StyledLabel>
    )
}

LabelComponent.propTypes = {
    text: PropTypes.string,
    forLabel: PropTypes.string,
}