import './styles.css'
import { Link } from 'react-router-dom';

import { BtnSocialMedia } from '../_NavElements/BtnSocialMedia';
import { Logo } from '../_NavElements/Logo'
import { BtnDefaultPink1 } from '../_BtnsDefault/BtnDefaultPink1';


export const Header = (props) => {
    const conteudoHeader  = props.conteudoHeader;
    return(
    <>
    <header className="header-">
        <div className="container align">
            <div>
                <div className="bar-social">
                        <BtnSocialMedia />
                </div>

                <div className="nav">
                    <div className="logo">
                        <Logo />    
                    </div>
                    <div className="nav-bar">
                            <ul>
                                <div>
                                    <li> <Link to="/" className="btn-link"> Home </Link></li>
                                </div>
                                <div>
                                    <li> <a href="/#especialidades" className="btn-link"> Especialidades </a> </li>
                                </div>
                                <div>
                                    <li> <Link to ="/contato" className="btn-link"> Contato </Link> </li>
                                </div>
                                <div className="btn-entrar"> <Link to="/"> <BtnDefaultPink1 type={"button"} value={"Entrar"} /> </Link> </div>
                            </ul>
                        </div>
                </div>
            </div>
            {conteudoHeader}
        </div>
    </header>
    </>
    )
}