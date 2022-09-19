import PropTypes from "prop-types";

import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticationProvider = ({ children }) => {

    return(
        <AuthenticationContext.Provider>
            {children}
        </AuthenticationContext.Provider>
    )
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node,
  };