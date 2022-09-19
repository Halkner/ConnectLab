import PropTypes from "prop-types";
import { useState } from "react";

import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }) => {

    // Login Modal

    const [showLoginModal, setShowLoginModal] = useState(false);

    const openLoginModal = () => {
        setShowLoginModal(true);
    }

    const closeLoginModal = () => {
        setShowLoginModal(false);
    }

    // Register Modal
    const [showRegModal, setShowRegModal] = useState(false);

    const openRegModal = () => {
        setShowRegModal(true);
    }

    const closeRegModal = () => {
        setShowRegModal(false);
    }

    return(
        <ModalContext.Provider 
        value={
            {showLoginModal, openLoginModal, closeLoginModal,
             showRegModal, openRegModal, closeRegModal}
        }>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node,
  };