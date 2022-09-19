import * as SM from './styles'
import { Input } from '../../Input'
import { Title } from '../../atoms/Title'
import { Label } from '../../atoms/Label/Label'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'

export const RegisterModal = () => {

    const {closeRegModal} = useModal()

    return(
        <SM.Background>
            <SM.ModalContainer>
                <SM.CloseModalButton onClick={() => closeRegModal()}> X </SM.CloseModalButton>

                <div className='modal-content'>
                    <Title text="Cadastrar" />

                    <form>
                        <div className='form-wrapper'>
                            <div className='form-container-one'>
                                <Label text="Nome Completo*"/>
                                <Input placeholder="Seu nome" value="Matheus Adriano Martins" req={true}/>

                                <Label text="URL Foto perfil"/>
                                <Input placeholder="Sua foto"/>

                                <Label text="Senha*"/>
                                <Input placeholder="Sua senha" type="password" req={true} minLength={8} maxLength={20}/>

                                <Label text="CEP*"/>
                                <Input placeholder="CEP" type="string" req={true} maxLength={9} />

                                <Label text="Cidade*"/>
                                <Input placeholder="Sua cidade" type="string" req={true}/>

                                <Label text="Número*"/>
                                <Input placeholder="Seu número" type="string" req={true}/>
                            </div>

                            <div className='form-container-two'>
                                <Label text="E-Mail*"/>
                                <Input placeholder="Seu e-mail" type="string" req={true}/>

                                <Label text="Telefone"/>
                                <Input placeholder="Seu telefone" type="string" maxLength={17}/>

                                <Label text="Confirmação da senha*"/>
                                <Input placeholder="Confirme a senha" type="password" req={true} minLength={8} maxLength={20}/>

                                <Label text="Logradouro/Endereço*"/>
                                <Input placeholder="Seu logradouro/endereço" type="string" req={true}/>

                                <Label text="Complemento"/>
                                <Input placeholder="Seu complemento" type="string"/>
                                
                                <Label text="Bairro*"/>
                                <Input placeholder="Seu bairro" type="string" req={true}/>
                            </div>
                        </div>

                        <div className="button-container">
                            <Button highlight={true} text="CADASTRAR"/>
                        </div>
                    </form>
                </div>
            </SM.ModalContainer>
        </SM.Background>
    )
}