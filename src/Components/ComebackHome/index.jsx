import './styles.css'

import { Link } from 'react-router-dom'

export const ComebackHome = () => {
    return(
        <Link to="/adm"> <h3 className="home"> Voltar ao login </h3> </Link>
    )
}