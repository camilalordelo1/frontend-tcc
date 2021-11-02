import { BtnSocialMedia } from '../../../Components/_NavElements/BtnSocialMedia';
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { Logo } from '../../../Components/_NavElements/Logo'

import imgHeader from './../../../img/header-agendar.png'

import './styles.css'
import { Link } from 'react-router-dom';


function Home () {
    return(
    <>
    <header>
        <div className="container">
            <div className="bar-social">
                    <BtnSocialMedia />
                </div>
                <div className="nav">
                    <Logo />
                    <nav>
                        <ul className="nav-bar">
                            <li> <Link to="/" className="btn-link active"> Home </Link></li>
                            <li> <Link to="/" className="btn-link"> Especialidades </Link></li>
                            <li> <Link to ="/" className="btn-link"> Contato </Link> </li>
                            <div className="btn-entrar"> <Link to="/"> <BtnDefaultPink1 type={"button"} value={"Entrar"} /> </Link> </div>
                        </ul>
                    </nav>
                </div>  
                <img className="img-header" src={imgHeader} alt=""/>
        </div>
    </header>
    </>
    )
}

export default Home;