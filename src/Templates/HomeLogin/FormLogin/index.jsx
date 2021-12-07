import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { decodeToken } from 'react-jwt'

import './styles.css'

import { BtnDefaultPink1 } from'../../../Components/_BtnsDefault/BtnDefaultPink1'
import { InputDefault } from '../../../Components/InputDefault';
import { AuthContext } from '../../../context/AuthContext';
import { api } from '../../../services/api';

export const FormLogin = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			login: undefined,
			password: undefined
		}
	})

	const { isAuthenticated, signIn, setIsAuthenticated } = useContext(AuthContext)

	const history = useHistory()

	const handleLogin = handleSubmit((async ({ login, password }) => {                
		const response = await signIn({
			login,
			password
		})

		if (response.data?.staff) {
			history.replace('/dashboard')
			window.location.reload()
		} else if (response.data?.staff === false) {
			history.replace('/patient')
			window.location.reload()
		} 
	}))
	
	useEffect(() => {
		api
			.get('/token')
			.then(async ({ data }) => {
				if (data.accessToken) {
					setIsAuthenticated(true)
					
					api.defaults.headers.Authorization = `Bearer ${data.accessToken}`

					const { staff } = decodeToken(data.accessToken)

					if (staff) {
						history.push('/dashboard')
					} else if (staff === false) {
						history.push('/patient')
					}
				}
			})
			.catch(err => console.log(err?.response))
	})

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
			{isAuthenticated === false && 
				(
					<h4 
						style={{
							color: 'var(--primary-pink)', 
						}}
					>
						Usuário ou login inválido.
					</h4>
				)
			}
			<Link to="/recoverypass" onClick={() => window.location.reload()}>
				<p className="p-pass">Esqueci a senha</p>
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