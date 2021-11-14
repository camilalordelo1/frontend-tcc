import './styles.css'

import { LogoWhite }  from '../../../../Components/_NavElements/LogoWhite'

import { BtnSocialMedia } from '../../../../Components/_NavElements/BtnSocialMedia'

export const Footer = () => {
    return(
        <>
        <div className="footer-black">
            <div className="container">
                <div className="footer">
                    <div className="logo-footer">
                            <LogoWhite />
                    </div>
                    <div className="end-tel"> 
                            <p> Estr. Bragantina, 751 - Conj. Hab. Sao Jose, Campo Limpo Paulista - SP</p>
                            <p> +55 (11) 94066-6426 </p>
                    </div>
                    <div className="contat">
                            <p> Contate-nos </p>
                            <BtnSocialMedia />
                    </div>
                </div>
            </div>
        </div>
        <div className="direitos">
                <p> @2021 por Nexus. Todos os direitos reservados</p>
        </div>
        </>
    )
}