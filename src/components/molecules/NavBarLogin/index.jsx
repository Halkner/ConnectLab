import { Logo } from "../../atoms/Logo"
import { useModal } from "../../../contexts/Modal/useModal"
import { ItemMenu, Nav } from "./styles"

export const NavBarLogin = () => {    
    const {openRegModal} = useModal();
    return(
        <>
            <Nav>
                <div className="logo-container">
                    <Logo/>
                </div>
                <ul>
                    <ItemMenu onClick={openRegModal}>
                        Registrar-se
                    </ItemMenu>
                </ul>
            </Nav>
        </>
    )
}