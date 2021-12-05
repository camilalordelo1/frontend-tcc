import './styles.css'

import { BtnDefaultPink1 } from'../../../Components/_BtnsDefault/BtnDefaultPink1'
import { InputDefault } from '../../../Components/InputDefault';
import { Link, useHistory } from 'react-router-dom'
import { api } from '../../../services/api';
import { useForm } from 'react-hook-form';

export const FormLogin = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            login: undefined,
            password: undefined
        }
    })

    const history = useHistory()

    const handleLogin = handleSubmit((async ({ login, password }) => {                
        try {
            const { data } = await api.post('/auth/login', {
                login, 
                password
            })

            api.defaults.headers.Authorization = `Bearer ${data.accessToken}`

            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }))
    
    return (
        <form id="loginForm" onSubmit={handleLogin}>
            <InputDefault
                id="User"
                typeInput="text" 
                labelName="E-mail"
                {...register('login', {
                    maxLength: 250,
                    required: true
                })}
            />
            <InputDefault 
                id="Password"
                typeInput="password" 
                labelName="Senha"
                {...register('password', {
                    maxLength: 250,
                    required: true
                })}
            />
            <Link to="/recoverypass">
                <p className="p-pass">Esqueci a senha </p>
            </Link>
            <div className="btn-box-d">
                <BtnDefaultPink1 
                    value="Entrar" 
                    type="submit" 
                />
            </div>
        </form>
    )
}