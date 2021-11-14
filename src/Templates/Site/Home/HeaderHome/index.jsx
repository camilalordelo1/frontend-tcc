import { Link } from 'react-router-dom'
import { Header } from '../../../../Components/Header'

import './styles.css'

export const HeaderHome = () => {
    const conteudohome = (        
    <Link to="/contato"> 
    <div className="agende">
        <h2> Agende agora sua avaliação! </h2>
        <h3> Entre em contato conosco e consulte nossos valores! <i class="bi bi-arrow-down-right-circle-fill"></i></h3>
    </div>
    </Link>)
    return(
        <Header conteudoHeader={conteudohome} />
    )
}