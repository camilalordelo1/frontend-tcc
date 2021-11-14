import imgPilates from '../../../../img/pilates.png'
import imgMichele from '../../../../img/imgMichele.png'

import './styles.css'

export const NossoConsul = () => {
    return(
    <section>

        <div className="nosso-consul">
            <div className="container">
                <div className="nosso-consul-bloco">
                    <div className="col">
                        <div className="nosso-consul-txt">
                            <div className="nosso-consul-title">
                                <h3> Nosso consultório </h3>  <img src={imgPilates} alt="" />
                            </div>
                            <div className="nc-txt-filho">
                                <h4> Missão </h4>
                                <p> Proporcionar um tratamento fisioterapêutico com qualidade, buscando a reabilitação físico funcional do paciente, visando a qualidade de vida da sociedade no qual estamos inseridos. </p> 
                            </div>
                            <div className="nc-txt-filho">
                                <h4> Visão </h4>
                                <p> Ser referência na reabilitação neuropsicomotora de pacientes com disfunções ortopédicas e neurológicas adulto e infantil. Esta, reconhecida como melhor opção pela excelência dos serviços prestados. </p>
                            </div>
                            <div className="nc-txt-filho">
                                <h4> Valores </h4>
                                <p> Ética, profissionalismo, comprometimento, excelência no atendimento especializado, superação, motivação e humanização. </p>
                            </div>
                        </div>
                        <div className="nosso-consul-img">
                            <img src={imgMichele} alt="" />
                            <h3> Dra. Michele Menezes </h3>
                            <p> Fisioterapeuta </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}