import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export const Button = props => {
    return (
        <StyledButton highlight={props.highlight}>
            {props.text}
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    highlight: PropTypes.bool,
}