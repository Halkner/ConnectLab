import * as SM from './styles'
import { Input } from '../../atoms/Input'
import { Title } from '../../atoms/Title'
import { Label } from '../../atoms/Label/Label'
import { Button } from '../../atoms/Button'
import { useModal } from '../../../contexts/Modal/useModal'
import { useForm } from 'react-hook-form'
import { StyledLabel } from '../../atoms/Label/styles'
import { StyledInput } from '../../atoms/Input/styles'
import axios from 'axios'

export const LoginModal = () => {

    const {handleSubmit, register, formState:{erros}} = useForm();
    const {closeLoginModal} = useModal();

    const handleLogin = (data) => {
        alert(JSON.stringify(data));

        const postFormat = {
            email: data.login,
            password: data.senha,
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

                            {/* <Label text="Login" forLabel="login"/>
                            <Input placeholder="Digite seu login..." type="string" {...register("login")} inputName="login"/>

                            <Label text="Senha" forLabel="senha"/>
                            <Input placeholder="Digite sua senha..." type="password" {...register("senha")} inputName="senha"/> */}

                            <StyledLabel htmlFor="login">Login</StyledLabel>
                            <StyledInput placeholder="Digite seu login..." type="string" name="login" {...register("login")}/>

                            <StyledLabel htmlFor="senha">Senha</StyledLabel>
                            <StyledInput placeholder="Digite sua senha..." type="password" name="senha" {...register("senha")}/>

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