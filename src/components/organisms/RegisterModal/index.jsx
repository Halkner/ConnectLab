import * as SM from './styles'
import { Title } from '../../atoms/Title'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'
import { StyledLabel } from '../../atoms/Label/styles'
import { StyledInput } from '../../atoms/Input/styles'
import { useForm } from 'react-hook-form'
import {useAuth} from '../../../contexts/Authentication/useAuth'
import axios from 'axios'

export const RegisterModal = () => {

    const {closeRegModal} = useModal()
    const {handleRegister} = useAuth()

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const handleCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            setValue("adress", res.data.logradouro)
            setValue("city", res.data.localidade)
            setValue("state", res.data.uf)
            setValue("neighborhood", res.data.bairro)

            setFocus("houseNumber")
        });
    }

    return(
        <SM.Background>
            <SM.ModalContainer>
                <SM.CloseModalButton onClick={() => closeRegModal()}> X </SM.CloseModalButton>

                <div className='modal-content'>
                    <Title text="Cadastrar" />

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className='form-wrapper'>
                            <div className='form-container-one'>
                                <StyledLabel htmlFor="fullname">Nome Completo*</StyledLabel>
                                <StyledInput placeholder="Seu nome e sobrenome" type="string" name="fullname" {...register("fullname")} required/>

                                <StyledLabel htmlFor="urlPhoto">URL foto perfil</StyledLabel>
                                <StyledInput placeholder="Sua foto" type="url" name="urlPhoto" {...register("urlPhoto")}/>

                                <StyledLabel htmlFor="password">Senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="password" {...register("password")} minLength={8} required/>

                                <StyledLabel htmlFor="cep">CEP*</StyledLabel>
                                <StyledInput placeholder="Seu CEP" type="string" name="cep" {...register("cep")} onBlur={handleCEP} required/>

                                <StyledLabel htmlFor="city">Cidade*</StyledLabel>
                                <StyledInput placeholder="Sua cidade" type="string" name="city" {...register("city")}/>

                                <StyledLabel htmlFor="state">UF*</StyledLabel>
                                <StyledInput placeholder="ex: SP" type="string" name="state" {...register("state")} maxLength={2} required/>

                                <StyledLabel htmlFor="complement">Complemento</StyledLabel>
                                <StyledInput placeholder="Complemento..." type="string" name="complement" {...register("complement")}/>
                            </div>

                            <div className='form-container-two'>
                                <StyledLabel htmlFor="email">E-mail*</StyledLabel>
                                <StyledInput placeholder="Seu e-mail" type="string" name="email" {...register("email")} required/>

                                <StyledLabel htmlFor="phone">Telefone</StyledLabel>
                                <StyledInput placeholder="(99) 9 9999-9999" type="phone" name="phone" {...register("phone")}/>

                                <StyledLabel htmlFor="passwordConfirm">Confirmar senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="passwordConfirm" {...register("passwordConfirm")} minLength={8}/>

                                <StyledLabel htmlFor="adress">Logradouro/Endereço*</StyledLabel>
                                <StyledInput placeholder="Seu logradouro/endereço" type="string" name="adress" {...register("adress")} required/>

                                <StyledLabel htmlFor="houseNumber">Número*</StyledLabel>
                                <StyledInput placeholder="Número da casa" type="string" name="houseNumber" {...register("houseNumber")} required/>
                                
                                <StyledLabel htmlFor="neighborhood">Bairro*</StyledLabel>
                                <StyledInput placeholder="Seu logradouro/endereço" type="string" name="neighborhood" {...register("neighborhood")} required/>
                            </div>
                        </div>

                        <div className="button-container">
                            <Button highlight={true} text="CADASTRAR" type="submit"/>
                        </div>
                    </form>
                </div>
            </SM.ModalContainer>
        </SM.Background>
    )
}