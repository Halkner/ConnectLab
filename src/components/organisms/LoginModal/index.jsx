import * as SM from './styles'
import { TitleComponent } from '../../atoms/TitleComponent'
import { ButtonComponent } from '../../atoms/ButtonComponent'
import { useModal } from '../../../contexts/Modal/useModal'
import { useForm } from 'react-hook-form'
import { StyledLabel } from '../../atoms/LabelComponent/styles'
import { StyledInput } from '../../atoms/InputComponent/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useAuth } from '../../../contexts/Authentication/useAuth'
import { InputError } from '../../atoms/InputError'

export const LoginModal = () => {

    const {closeLoginModal} = useModal();
    const { handleLogin, isAuthenticated } = useAuth();

    const validationForm = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
    })

    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver: yupResolver(validationForm)
    });

     
    return(
        <>
            <SM.Background>
                <SM.ModalContainer>
                    <SM.CloseModalButton onClick={closeLoginModal}> X </SM.CloseModalButton>

                    <div className='modal-content'>
                        <TitleComponent text="Acessar" />
                        <p>{String(isAuthenticated)}</p>
                        <form onSubmit={handleSubmit(handleLogin)}>

                            <StyledLabel htmlFor="email">Login</StyledLabel>
                            <StyledInput placeholder="Ex: hally1234@gmail.com" type="string" name="email" {...register("email")}  />
                            {errors?.email?.type && <InputError type={errors.email.type} field="email"/>}

                            <StyledLabel htmlFor="password">Senha</StyledLabel>
                            <StyledInput placeholder="Digite sua senha..." type="password" name="password" {...register("password")} />
                            {errors?.password?.type && <InputError type={errors.password.type} field="password"/>}

                            <div className="button-container">
                                <ButtonComponent highlight={true} text="ACESSAR" type="submit"/>
                            </div>
                        </form>
                    </div>
                </SM.ModalContainer>
            </SM.Background>
        </>
    )
}