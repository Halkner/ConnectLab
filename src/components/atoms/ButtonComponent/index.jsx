import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export const ButtonComponent = props => {
    return (
        <StyledButton highlight={props.highlight} type={props.type}>
            {props.text}
        </StyledButton>
    )
}

ButtonComponent.propTypes = {
    text: PropTypes.string,
    highlight: PropTypes.bool,
    type: PropTypes.string,
}