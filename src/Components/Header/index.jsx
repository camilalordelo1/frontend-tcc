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
        <div className="container">
            <div className="bar-social">
                    <BtnSocialMedia />
            </div>
            <div className="nav">
                <div className="logo">
                    <Logo />    
                </div>  
                    {/* <button className="btn-menu"> <i class="bi bi-list bi-lg"></i> </button> */}
                    
                    <nav>
                        {/* <a className="btn-close" href=" "> x </a> */}
                        <ul className="nav-bar">
                            <li> <Link to="/" className="btn-link"> Home </Link></li>
                            <li> <a href="#especialidades" className="btn-link"> Especialidades </a>
                            </li>
                            <li> <Link to ="/contato" className="btn-link"> Contato </Link> </li>
                            <div className="btn-entrar"> <Link to="/"> <BtnDefaultPink1 type={"button"} value={"Entrar"} /> </Link> </div>
                        </ul>
                    </nav>
            </div>
            {conteudoHeader}
        </div>
    </header>
    </>
    )
}