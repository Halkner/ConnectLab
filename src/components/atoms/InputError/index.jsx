import { SpanError } from "./styles";
import errors from '../../../utils/errors.json'

import PropTypes from "prop-types";

export const InputError = ({ type, field }) => {
    return <SpanError>{errors[field][type]}</SpanError>
}

InputError.propTypes = {
    type: PropTypes.string,
    field: PropTypes.string,
}