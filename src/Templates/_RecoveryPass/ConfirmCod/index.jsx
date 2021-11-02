import './styles.css';

import { Link } from 'react-router-dom'

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { BtnDefaultPink2 } from '../../../Components/_BtnsDefault/BtnDefaultPink2';
import { ParentPass } from '../ParentPass'



function ConfirmCod() {
    const conteudo = (
        <div className="conteudo">
            <h3 className="info"> Digite o código que enviamos para seu e-mail! </h3>
            <div className="inputs">
                <InputDefault
                id="Cod"
                typeInput="text"
                labelName="Código"
                /> 
            </div>

            <div className="row">
                <BtnDefaultPink2 value="Reenviar Código" type="button"/>
                <Link to="/newpass" className="btn-link"> 
                    <div className="btn-box-d" style={{paddingBottom: "4vh"}}>
                        <BtnDefaultPink1 value="Enviar" type="submit"/>
                    </div>
                </Link>
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

