import PropTypes from 'prop-types';

export const Title = props => {
    return <p>{props.text}</p>
}

Title.propTypes = {
    text: PropTypes.string,
}