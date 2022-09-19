import * as SM from './styles'
import { Input } from '../../atoms/Input'
import { Title } from '../../atoms/Title'
import { Label } from '../../atoms/Label/Label'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'
import { StyledLabel } from '../../atoms/Label/styles'
import { StyledInput } from '../../atoms/Input/styles'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const RegisterModal = () => {

    const {closeRegModal} = useModal()

    const {register, handleSubmit} = useForm();

    const handleRegister = data => {
        alert(JSON.stringify(data))

        const postFormat = {
            email: data.email,
            password: data.password,
            fullName: data.fullname,
            photoUrl: data.urlPhoto,
            phone: data.phone,
            userAddress: {
                zipCode: data.cep,
                street: data.adress,
                number: data.houseNumber,
                neighborhood: data.neighborhood,
                city: data.city,
                state: data.state,
                complement: data.complement
            }
        }

            axios.post("https://connectlab.onrender.com/auth/login", postFormat)
            .then(() => {
            alert(`Usuário ${data.email} autenticado!`)
            })
            .catch(() => {
            alert(`O usuário ${data.email} não existe!`)
            })
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
                                <StyledInput placeholder="Seu nome" type="string" name="fullname" {...register("fullname")} required/>

                                <StyledLabel htmlFor="urlPhoto">URL foto perfil</StyledLabel>
                                <StyledInput placeholder="Sua foto" type="url" name="urlPhoto" {...register("urlPhoto")}/>

                                <StyledLabel htmlFor="password">Senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="password" {...register("password")} minLength={8} required/>

                                <StyledLabel htmlFor="cep">CEP*</StyledLabel>
                                <StyledInput placeholder="Seu CEP" type="string" name="cep" {...register("cep")} required/>

                                <StyledLabel htmlFor="city">Cidade*</StyledLabel>
                                <StyledInput placeholder="Sua cidade" type="string" name="city" {...register("city")}/>

                                <StyledLabel htmlFor="houseNumber">Número*</StyledLabel>
                                <StyledInput placeholder="Seu número" type="string" name="houseNumber" {...register("houseNumber")} required/>

                                <StyledLabel htmlFor="complement">Complemento</StyledLabel>
                                <StyledInput placeholder="Seu logradouro/endereço" type="string" name="complement" {...register("complement")}/>
                            </div>

                            <div className='form-container-two'>
                                <StyledLabel htmlFor="email">E-mail*</StyledLabel>
                                <StyledInput placeholder="Seu e-mail" type="string" name="email" {...register("email")} required/>

                                <StyledLabel htmlFor="phone">Telefone</StyledLabel>
                                <StyledInput placeholder="(99) 9 9999-9999" type="phone" name="phone" {...register("phone")}/>

                                <StyledLabel htmlFor="passwordConfirm">Senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="passwordConfirm" {...register("passwordConfirm")}/>

                                <StyledLabel htmlFor="adress">Logradouro/Endereço*</StyledLabel>
                                <StyledInput placeholder="Seu logradouro/endereço" type="string" name="adress" {...register("adress")} required/>

                                <StyledLabel htmlFor="state">Estado*</StyledLabel>
                                <StyledInput placeholder="Seu complemento" type="string" name="state" {...register("state")} required/>
                                
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