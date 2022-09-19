import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export const Button = props => {
    return (
        <StyledButton highlight={props.highlight} type={props.type}>
            {props.text}
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    highlight: PropTypes.bool,
    type: PropTypes.string,
}