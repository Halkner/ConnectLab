import PropTypes from "prop-types";
import { StyledLabel } from "./styles";

export const Label = props => {
    return(
        <StyledLabel>{props.text}</StyledLabel>
    )
}

Label.propTypes = {
    text: PropTypes.string,
}