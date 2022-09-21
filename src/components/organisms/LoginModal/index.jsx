import * as SM from './styles'
import { Title } from '../../atoms/Title'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'
import { useForm } from 'react-hook-form'
import { StyledLabel } from '../../atoms/Label/styles'
import { StyledInput } from '../../atoms/Input/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useAuth } from '../../../contexts/Authentication/useAuth'
import axios from 'axios'
import { InputError } from '../../atoms/InputError'

export const LoginModal = () => {

    const validationForm = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    })

    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver: yupResolver(validationForm)
    });

    const {closeLoginModal} = useModal();

    const {Login} = useAuth();

    const handleLogin = (data) => {
        alert(JSON.stringify(data));

        const postFormat = {
            email: data.login,
            password: data.password,
        }

        axios.post("https://connectlab.onrender.com/auth/login", postFormat)
        .then(() => {
            alert(`Usuário ${data.login} autenticado!`)
        })
        .catch(() => {
            alert(`O usuário ${data.login} não existe!`)
        })
    }
    
    
    return(
        <>
            <SM.Background>
                <SM.ModalContainer>
                    <SM.CloseModalButton onClick={() => closeLoginModal()}> X </SM.CloseModalButton>

                    <div className='modal-content'>
                        <Title text="Acessar" />

                        <form onSubmit={handleSubmit(handleLogin)}>

                            <StyledLabel htmlFor="login">Login</StyledLabel>
                            <StyledInput placeholder="Ex: hally1234@gmail.com" type="string" name="login" {...register("login")}  />
                            {errors?.login?.type && <InputError type={errors.login.type} field="login"/>}

                            <StyledLabel htmlFor="password">Senha</StyledLabel>
                            <StyledInput placeholder="Digite sua senha..." type="password" name="password" {...register("password")} />
                            {errors?.password?.type && <InputError type={errors.password.type} field="password"/>}

                            <div className="button-container">
                                <Button highlight={true} text="ACESSAR" type="submit"/>
                            </div>
                        </form>
                    </div>
                </SM.ModalContainer>
            </SM.Background>
        </>
    )
}