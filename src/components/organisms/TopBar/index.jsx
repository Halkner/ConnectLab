import { NavBar } from "../../molecules/NavBar"
import { StyledHeader } from "./styles"

export const TopBar = () => {
    return (
        <StyledHeader>
            <NavBar isLogged={false}/>
        </StyledHeader>
    )
}