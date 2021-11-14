import './styles.css'

import imgArrow from '../../../../img/imgArrow.png'

export const Especialidades = () => {
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
                            <h3> ORTOPÉDICA </h3>
                            <div className="espaco"></div>
                            <img src={imgArrow} alt="" />
                        </div>
                        <div className="pri-item">
                            <h3> PRÉ E PÓS OPERATÓRIO </h3>
                        
                            <img src={imgArrow} alt="" />
                        </div>
                        <div className="pri-item">
                            <h3> NEUROLOGIA ADULTO E INFANTIL </h3>
                            <img src={imgArrow} alt="" />
                        </div>
                        <div className="pri-item">
                            <h3> TRATAMENTOS </h3>
                            <img src={imgArrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    )
}