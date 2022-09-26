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


    // Edit Modal

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
        
    const openEditModal = () => {
        setEditModalIsOpen(true);
    }

    const closeEditModal = () => {
        setEditModalIsOpen(false);
    }


    return(
        <ModalContext.Provider 
        value={
            {showLoginModal, openLoginModal, closeLoginModal,
             showRegModal, openRegModal, closeRegModal,
            editModalIsOpen, openEditModal, closeEditModal}
        }>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node,
  };