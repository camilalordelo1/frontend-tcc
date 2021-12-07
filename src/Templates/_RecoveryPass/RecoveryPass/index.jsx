import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { ParentPass } from './../ParentPass';
import { api } from '../../../services/api';

function Recoverypass() {
	const ref = useRef()
	const history = useHistory()

	const handlePasswordResetRequest = () => {
		localStorage.setItem('userEmail', ref.current.value)

		api.get('/password', {
			params: {
				email: ref.current.value
			}
		})
			.then(() => history.push('/confirmcod'))
	}

	const conteudo = (
		<div className="conteudo">
			<h3 className="info"> Enviaremos um código para seu e-mail para realizar a recuperação de senha! </h3>
			<div className="inputs">
				<InputDefault
					id="E-mail"
					typeInput="email"
					labelName="E-mail"
					ref={ref}
				/> 
			</div>
			<div className="btn-box-d" style={{paddingBottom: "0.5rem"}}>
					<BtnDefaultPink1 value="Enviar" type="button" onClick={handlePasswordResetRequest} />
			</div>	
		</div>
	)
	   
	
	return (
	<>
		<ParentPass title="Digite seu e-mail" conteudo={conteudo} />
	</>
	);
} 

export default Recoverypass;

