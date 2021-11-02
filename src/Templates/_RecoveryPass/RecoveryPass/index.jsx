import './styles.css';

import { Link } from 'react-router-dom'

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { ParentPass } from './../ParentPass';



function Recoverypass() {
    const title ="Digite seu e-mail"

    const conteudo = (
        <div className="conteudo">
            <h3 className="info"> Enviaremos um código para seu e-mail para realizar a recuperação de senha! </h3>
            <div className="inputs">
                <InputDefault
                id="E-mail"
                typeInput="e-mail"
                labelName="E-mail"
                /> 
            </div>

            <Link to="/confirmcod" className="btn-link"> 
                <div className="btn-box-d" style={{paddingBottom: "4vh"}}>
                    <BtnDefaultPink1 value="Enviar" type="submit"/>
                </div>
            </Link>

            
        </div>

         )
       
    
    return (
    <>
        <ParentPass title={title} conteudo={conteudo} />
    </>
    );
} 

export default Recoverypass;

