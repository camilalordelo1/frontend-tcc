import { Header } from '../../../Components/Header'
import { Facebook } from '../../../Components/_NavElements/BtnSocialMedia/Facebook'
import { Instagram } from '../../../Components/_NavElements/BtnSocialMedia/Instagram'
import { Whatsapp } from '../../../Components/_NavElements/BtnSocialMedia/Whatsapp'
import './styles.css'

export const Contato = () => {
    const conteudoContato = (
            <div className="contato">
                <h3> Siga-nos </h3>
                <div className="icon-container">
                    <div className="icon-ctt"> <Facebook /> <p>Consultório Reabilitando Vidas</p>  </div>
                    <div className="icon-ctt"> <Instagram /> <p> @fisiomichelemenezes  </p> </div>
                    <div className="icon-ctt"> <Whatsapp /> <p> +55 11 94066-6426 </p> </div>
                </div>
            </div>
    )
    return(
        <div className="div-contato">
            <Header conteudoHeader={conteudoContato} />
        </div>
        
    )
}