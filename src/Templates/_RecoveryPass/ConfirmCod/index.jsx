import { useRef } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css';

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { BtnDefaultPink2 } from '../../../Components/_BtnsDefault/BtnDefaultPink2';
import { ParentPass } from '../ParentPass'

import { api } from '../../../services/api';

function ConfirmCod() {
	const ref = useRef()
	
	const history = useHistory()

	const handleCode = () => {
		localStorage.setItem("recoveryCode", ref.current.value.trim())
		history.push('/newpass')
	}

	const handleResendCode = async () => {
		const email = await localStorage.getItem('userEmail')
		
		console.log('resending')

		api.get('/password', {
			params: {
				email
			}
		})
			.then(() => console.log('resend'))
	}
	
	const conteudo = (
		<div className="conteudo">
			<h3 className="info"> Digite o código que enviamos para seu e-mail! </h3>
			<div className="inputs">
				<InputDefault
					id="Cod"
					typeInput="text"
					labelName="Código"
					ref={ref}
				/> 
			</div>

			<div className="row">
				<BtnDefaultPink2 
					value="Reenviar Código" 
					type="button" 
					onClick={handleResendCode}
				/>
				<div className="btn-box-d" style={{paddingBottom: "0.5rem"}}>
					<BtnDefaultPink1 
						value="Enviar" 
						type="button" 
						onClick={handleCode} 
					/>
				</div>
			</div>
		</div>
		 )
		 
	return (
	<>
		<ParentPass title="" conteudo={conteudo} />
	</>
	);
} 

export default ConfirmCod;

