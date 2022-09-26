import { useAuth } from "../../../contexts/Authentication/useAuth"
import { useModal } from "../../../contexts/Modal/useModal";
import { StyledButton } from "../../atoms/ButtonComponent/styles";
import { StyledTitle } from "../../atoms/TitleComponent/styles";
import { EditProfile } from "../../organisms/EditProfile";
import { TopBar } from "../../organisms/TopBar"
import { StyledBtnContainer, StyledBtnLogout, StyledInfos, StyledInfosContainer, StyledMain, StyledPhotoContainer, StyledPhotoPortrait, StyledProfileContent, StyledSubTitle } from "./styles";

export const Profile = () => {

    const {auth, handleLogout} = useAuth();

    const{editModalIsOpen, openEditModal} = useModal();



    return(
        <>
            {!editModalIsOpen ? "" : <EditProfile/>}

            <TopBar/>
            <StyledMain>
                <StyledProfileContent>

                    <StyledPhotoContainer>
                        <StyledPhotoPortrait>
                            <img src={auth.photoUrl} alt="Usuário"/>
                        </StyledPhotoPortrait>
                            <StyledTitle>{auth.fullName}</StyledTitle>
                    </StyledPhotoContainer>

                    <hr />

                    <StyledInfosContainer>
                        <StyledSubTitle>Informações Adicionais</StyledSubTitle>

                        <StyledInfos>
                            <div>
                                <p><strong>E-mail: </strong>{auth.email}</p>
                                <p><strong>Telefone: </strong>{auth.phone}</p>
                                <p><strong>Cidade:</strong> {auth.userAddress.city}</p>
                                <p><strong>Bairro: </strong>{auth.userAddress.neighborhood}</p>
                            </div>
        
                            <div>
                                <p><strong>Número:</strong> {auth.userAddress.number}</p>
                                <p><strong>Estado:</strong> {auth.userAddress.state}</p>
                                <p><strong>Logradouro: </strong>{auth.userAddress.street}</p>
                                <p><strong>CEP:</strong> {auth.userAddress.zipCode}</p>
                            </div>

                        </StyledInfos>

                        <StyledBtnContainer>
                            <StyledBtnLogout onClick={handleLogout}>Logout</StyledBtnLogout>
                            <StyledButton onClick={openEditModal}>Editar</StyledButton>
                        </StyledBtnContainer>
                    </StyledInfosContainer>

                </StyledProfileContent>
            </StyledMain>
        </>
    )
}