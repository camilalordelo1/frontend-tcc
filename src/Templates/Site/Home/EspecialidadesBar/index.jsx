import './styles.css'

import imgArrow from '../../../../img/imgArrow.png'
import { Link } from 'react-router-dom'

export const EspecialidadesBar = () => {
    return(
        <section className="pri-especialidades" id="especialidades">
                <div class="pri-rosa"> 
                    <div className="container">
                        <h2> PRINCIPAIS ESPECIALIDADES </h2>
                    </div>
                </div>
                <div className="container">
                    <div className="pri-itens">
                        <div className="pri-item">
                        <Link to="/especialidades/ortopedica"className="btn-link">
                            <h3> ORTOPÉDICA </h3>
                            <div className="espaco"></div>
                            <img src={imgArrow} alt="" />
                        </Link>
                        </div>
                        <div className="pri-item">
                        <Link to="/especialidades/pre-pos-operatorio" className="btn-link">
                            <h3> PRÉ E PÓS OPERATÓRIO </h3>
                            <img src={imgArrow} alt="" />
                        </Link>
                        </div>
                        <div className="pri-item">
                        <Link className="btn-link">
                            <h3> NEUROLOGIA ADULTO E INFANTIL </h3>
                            <img src={imgArrow} alt="" />
                        </Link>
                        </div>
                        
                        <div className="pri-item">
                        <Link className="btn-link">
                            <h3> TRATAMENTOS </h3>
                            <img src={imgArrow} alt="" />
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}