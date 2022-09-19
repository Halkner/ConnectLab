import PropTypes from "prop-types";
import { StyledTitle } from "./styles";

export const Title = props => {
    return(
        <StyledTitle>{props.text}</StyledTitle>
    )
}

Title.propTypes = {
    text: PropTypes.string,
}