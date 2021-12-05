import { Header } from '../../../Components/Header'
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1'
import { Facebook } from '../../../Components/_NavElements/BtnSocialMedia/Facebook'
import { Instagram } from '../../../Components/_NavElements/BtnSocialMedia/Instagram'
import { Whatsapp } from '../../../Components/_NavElements/BtnSocialMedia/Whatsapp'

import { InputDefault } from './../../../Components/InputDefault'

import './styles.css'

export const Contato = () => {
    const conteudoContato = (
            <div className="contato">
                <div className="icon-container">
                <h3> Siga-nos </h3>
                    <div className="icon-ctt"> <Facebook /> <p>Consultório Reabilitando Vidas</p>  </div>
                    <div className="icon-ctt"> <Instagram /> <p> @fisiomichelemenezes  </p> </div>
                    <div className="icon-ctt"> <Whatsapp /> <p> +55 11 94066-6426 </p> </div>
                
                <div className="localizacao">
                    <h3> Localização </h3>
                    <div className="icon-ctt"> <i class="bi bi-geo-alt-fill"></i> <p>Estr. Bragantina, 751 - Conj. Hab. Sao Jose, Campo Limpo Paulista - SP</p>  </div>
                </div>
                </div>
                <div className="faleconosco">
                    <h3> Fale conosco </h3>
                    <div className="bloco-branco">
                        <InputDefault typeInput="text" labelName="Nome" />
                        <InputDefault typeInput="e-mail" labelName="E-mail" />
                        <div className="">
                        <div id="msgField">
                            <label htmlFor="msgTextarea"> Mensagem </label>
                            <textarea id="msgTextarea"/>
                        </div>
                        </div>
                        <BtnDefaultPink1 type="submit" value="Enviar" />
                    </div>
                </div>
            </div>
    )
    return(
        <div className="div-contato">
            <Header conteudoHeader={conteudoContato} />
        </div>
        
    )
}