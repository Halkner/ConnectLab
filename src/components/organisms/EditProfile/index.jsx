import * as SM from './styles'
import { TitleComponent } from '../../atoms/TitleComponent'
import { ButtonComponent } from '../../atoms/ButtonComponent'
import { useModal } from '../../../contexts/Modal/useModal'
import { StyledLabel } from '../../atoms/LabelComponent/styles'
import { StyledInput } from '../../atoms/InputComponent/styles'
import { useForm } from 'react-hook-form'
import {useAuth} from '../../../contexts/Authentication/useAuth'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { phoneNumberReg, nameReg, cepReg } from '../../../utils/validations'
import { InputError } from '../../atoms/InputError'
import { useEffect } from 'react'

export const EditProfile = () => {

    const {closeEditModal, setEditModalIsOpen} = useModal();
    const {EditProfile, auth} = useAuth();
    

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

    const validationForm = yup.object().shape({
        fullname: yup.string().matches(nameReg).required(),
        email: yup.string().email().required(),
        urlPhoto: yup.string().url(),
        phone: yup.string().matches(phoneNumberReg),
        password: yup.string().min(8).required(),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null]).required(),
        cep: yup.string().matches(cepReg).required(),
        adress: yup.string().required(),
        city: yup.string().required(),
        houseNumber: yup.number().positive().integer().required(),
        state: yup.string().required(),
        neighborhood: yup.string().required(),
        complement: yup.string(),
    })

    const {register, handleSubmit, setValue, setFocus, formState: { errors }} = useForm({
        resolver: yupResolver(validationForm)
    });

    return(
        <SM.Background>
            <SM.ModalContainer>
                <SM.CloseModalButton onClick={closeEditModal}> X </SM.CloseModalButton>

                <div className='modal-content'>
                    <TitleComponent text="Editar Usuário" />

                    <form onSubmit={handleSubmit(EditProfile)}>
                        <div className='form-wrapper'>
                            <div className='form-container-one'>

                                <StyledLabel htmlFor="fullname">Nome Completo*</StyledLabel>
                                <StyledInput placeholder="Ex: Matheus Adriano Martins" type="string" name="fullname" {...register("fullname")}/> 
                                {errors?.fullname?.type && <InputError type={errors.fullname.type} field="fullname"/>}
                                

                                <StyledLabel htmlFor="urlPhoto">URL foto perfil</StyledLabel>
                                <StyledInput placeholder="Ex: https://github.com/Halkner.png" type="url" name="urlPhoto" {...register("urlPhoto")}/>

                                <StyledLabel htmlFor="password">Senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="password" {...register("password")}/>
                                {errors?.password?.type && <InputError type={errors.password.type} field="password"/>}

                                <StyledLabel htmlFor="cep">CEP*</StyledLabel>
                                <StyledInput placeholder="Ex: 99999-999" type="string" name="cep" {...register("cep")} onBlur={handleCEP}/>
                                {errors?.cep?.type && <InputError type={errors.cep.type} field="cep"/>}

                                <StyledLabel htmlFor="city">Cidade*</StyledLabel>
                                <StyledInput placeholder="Ex: Biguaçu" type="string" name="city" {...register("city")}/>
                                {errors?.city?.type && <InputError type={errors.city.type} field="city"/>}

                                <StyledLabel htmlFor="state">UF*</StyledLabel>
                                <StyledInput placeholder="Ex: SP" type="string" name="state" {...register("state")}/>
                                {errors?.state?.type && <InputError type={errors.state.type} field="state"/>}

                                <StyledLabel htmlFor="complement">Complemento</StyledLabel>
                                <StyledInput placeholder="Ex: Casa de dois andares" type="string" name="complement" {...register("complement")}/>
                            </div>

                            <div className='form-container-two'>
                                <StyledLabel htmlFor="email">E-mail*</StyledLabel>
                                <StyledInput placeholder="Ex: hally1234@gmail.com" type="string" name="email" {...register("email")}/>
                                {errors?.email?.type && <InputError type={errors.email.type} field="email"/>}

                                <StyledLabel htmlFor="phone">Telefone</StyledLabel>
                                <StyledInput placeholder="Ex: (99) 9 9999-9999" type="tel" name="phone" {...register("phone")}/>
                                {errors?.phone?.type && <InputError type={errors.phone.type} field="phone"/>}

                                <StyledLabel htmlFor="passwordConfirm">Confirmar senha*</StyledLabel>
                                <StyledInput placeholder="Sua senha" type="password" name="passwordConfirm" {...register("passwordConfirm")}/>
                                {errors?.passwordConfirm?.type && <InputError type={errors.passwordConfirm.type} field="passwordConfirm"/>}

                                <StyledLabel htmlFor="adress">Logradouro/Endereço*</StyledLabel>
                                <StyledInput placeholder="Ex: Rua Augusta" type="string" name="adress" {...register("adress")}/>
                                {errors?.adress?.type && <InputError type={errors.adress.type} field="adress"/>}

                                <StyledLabel htmlFor="houseNumber">Número*</StyledLabel>
                                <StyledInput placeholder="Ex: 42" type="string" name="houseNumber" {...register("houseNumber")}/>
                                {errors?.houseNumber?.type && <InputError type={errors.houseNumber.type} field="houseNumber"/>}
                                
                                <StyledLabel htmlFor="neighborhood">Bairro*</StyledLabel>
                                <StyledInput placeholder="Ex: Centro " type="string" name="neighborhood" {...register("neighborhood")} />
                                {errors?.neighborhood?.type && <InputError type={errors.neighborhood.type} field="neighborhood"/>}
                            </div>
                        </div>

                        <div className="button-container">
                            <ButtonComponent highlight={true} text="EDITAR" type="submit"/>
                        </div>
                    </form>
                </div>
            </SM.ModalContainer>
        </SM.Background>
    )
}