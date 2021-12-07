import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';

import { ParentPass } from './../ParentPass';

import { api } from '../../../services/api'

function NewPass() {
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [error, setError ] = useState(false)
	const [error2, setError2 ] = useState(false)

	const history = useHistory()

	const handlePasswordReset = () => {
		const token = localStorage.getItem('recoveryCode')

		api.post('/password', {
			token,
			password
		})
			.then(() => {
				localStorage.clear()
				history.push('/passchanged')
			})
			.catch(() => {
				localStorage.removeItem('recoveryCode')
				setError2(true)
				setTimeout(() => {
					history.push('/confirmcod')
				}, 600)
			})
	}

	const compareFields = (field, fieldToCompare) => {
		if (fieldToCompare.length !== 0) {
			if (fieldToCompare !== field) {
				setError(true)
			} else {
				setError(false)
			}
		}
	} 

	const conteudo = (
			<div className="conteudo">
				<div className="inputs">
					<InputDefault
						id="senha"
						typeInput="password"
						labelName="Nova senha"
						onChange={e => {
							setPassword(e.target.value)
						}}
					/> 
					<InputDefault
						id="senhaconfirm"
						typeInput="password"
						labelName="Digite a senha novamente"
						onBlur={() => {
							compareFields(password, passwordConfirm)
						}}
						onChange={e => {
							setPasswordConfirm(e.target.value)
						}}
					/> 
				</div>

				<div className="btn-box-d" style={{paddingBottom: "0.5rem"}}>
						<BtnDefaultPink1 
							value="Enviar" 
							type="button" 
							onClick={error ? undefined : handlePasswordReset} 
						/>
						{error2 && 
							(
								<h4 
									style={{
										color: 'var(--primary-pink)', 
										marginTop: '1.2rem'
									}}
								>
									Código de confirmação errado.
								</h4>
							)
						}
						{error && 
							(
								<h4 
									style={{
										color: 'var(--primary-pink)', 
										marginTop: '1.2rem'
									}}
								>
									As senhas não conferem.
								</h4>
							)
						}
				</div>
			</div>
		)
	   
	
	return (
	<>
		<ParentPass title="Digite sua nova senha" conteudo={conteudo}/>
	</>
	);
} 

export default NewPass;

