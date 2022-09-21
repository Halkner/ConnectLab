import PropTypes from "prop-types";
import { StyledTitle } from "./styles";

export const TitleComponent = props => {
    return(
        <StyledTitle>{props.text}</StyledTitle>
    )
}

TitleComponent.propTypes = {
    text: PropTypes.string,
}