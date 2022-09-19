import { useModal } from "../../../contexts/Modal/useModal"
import { Logo } from "../../atoms/Logo";
import { ItemMenu, Nav, StyledHeader } from "./styles";
import { LoginModal } from "../../organisms/LoginModal";
import { RegisterModal } from "../../organisms/RegisterModal";

export const Login = () => {

    const {showLoginModal, openLoginModal, showRegModal, openRegModal} = useModal();

    return(
        <>
            {showLoginModal ? <LoginModal/> : ''}
            {showRegModal ? <RegisterModal/> : '' }

            <StyledHeader>
                <Nav>
                    <div>
                        <Logo/>
                    </div>
                    <ul>
                        <ItemMenu onClick={() => openLoginModal()}>
                            Login
                        </ItemMenu>
                        <ItemMenu onClick={openRegModal}>
                            Registrar-se
                        </ItemMenu>
                    </ul>
                </Nav>
            </StyledHeader>

        </>
    )
}