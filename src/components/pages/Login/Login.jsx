import { useModal } from "../../../contexts/Modal/useModal"
import { StyledMain } from "./styles";
import { RegisterModal } from "../../organisms/RegisterModal";
import { TopBarLogin } from "../../organisms/TopBarLogin";
import { LoginForm } from "../../organisms/LoginForm";

export const Login = () => {

    const {showRegModal} = useModal();

    return(
        <>
            {showRegModal ? <RegisterModal/> : '' }

            <TopBarLogin/>
            <StyledMain>
                <LoginForm/>
            </StyledMain>

        </>
    )
}