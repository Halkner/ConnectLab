import * as SM from './styles'
import { Input } from '../../Input'
import { Title } from '../../atoms/Title'
import { Label } from '../../atoms/Label/Label'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'

export const LoginModal = () => {

    const {closeLoginModal} = useModal()

    return(
        <>
            <SM.Background>
                <SM.ModalContainer>
                    <SM.CloseModalButton onClick={() => closeLoginModal()}> X </SM.CloseModalButton>

                    <div className='modal-content'>
                        <Title text="Acessar" />

                        <form>
                            <Label text="Login"/>
                            <Input placeholder="Digite seu login..." type="string"/>

                            <Label text="Senha"/>
                            <Input placeholder="Digite sua senha..." type="password"/>

                            <div className="button-container">
                                <Button highlight={true} text="ACESSAR"/>
                            </div>
                        </form>
                    </div>
                </SM.ModalContainer>
            </SM.Background>
        </>
    )
}