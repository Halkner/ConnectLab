import { StyledBox } from "./styles";
import PropTypes from "prop-types";

export const Box = props => {

    return(
        <StyledBox width={props.width} height={props.height} margin={props.margin}>{props.children}</StyledBox>
    )

}

Box.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
}