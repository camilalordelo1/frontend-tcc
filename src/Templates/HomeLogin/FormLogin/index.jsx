import './styles.css'

import { BtnDefaultPink1 } from'../../../Components/_BtnsDefault/BtnDefaultPink1'
import { InputDefault } from '../../../Components/InputDefault';
import { Link } from 'react-router-dom'

export const FormLogin = () => {
    return (
            <form action="" >
            
               <InputDefault
                        id="User"
                        typeInput="text" 
                        labelName="E-mail"
                />
                
                <InputDefault 
                        id="Password"
                        typeInput="password" 
                        labelName="Senha"
                />
                
                <Link to="/recoverypass">
                    <p className="p-pass">Esqueci a senha </p>
                </Link>

                <Link to="/dashboard" className="btn-link"> 
                    <div className="btn-box-d">
                        <BtnDefaultPink1 value="Entrar" type="submit" />
                    </div>
                </Link>
            </form>
    )
}