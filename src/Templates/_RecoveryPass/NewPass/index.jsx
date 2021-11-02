import './styles.css';

import { Link } from 'react-router-dom'

/* COMPONENTS */
import { InputDefault } from '../../../Components/InputDefault'

import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { ParentPass } from './../ParentPass';



function NewPass() {
    const title ="Digite sua nova senha"

    const conteudo = (
        <div className="conteudo">
            
            <div className="inputs">
                <InputDefault
                id="senha"
                typeInput="password"
                labelName="Nova senha"
                /> 
                <InputDefault
                id="senhaconfirm"
                typeInput="password"
                labelName="Digite a senha novamente"
                /> 
            </div>

            <Link to="/passchanged" className="btn-link"> 
                <div className="btn-box-d" style={{paddingBottom: "4vh"}}>
                    <BtnDefaultPink1 value="Enviar" type="submit"/>
                </div>
            </Link>
            
        </div>

         )
       
    
    return (
    <>
        <ParentPass title={title} conteudo={conteudo}/>
    </>
    );
} 

export default NewPass;

