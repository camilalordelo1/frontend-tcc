import svgFace from '../../../img/icon-face.svg'
import svgInsta from '../../../img/icon-insta.svg'
import svgWhats from '../../../img/icon-whats.svg'

import './styles.css'

export const BtnSocialMedia = () => {
    return (
    <div className="btnsSocialMedia">

        <a href="https://www.facebook.com/fisioterapiareabilitandovidas" target="blank"> <div className="btnFace btnSM"> <img src={svgFace} alt="" href=""/></div> </a> 
       
        <a href="https://www.instagram.com/fisiomichelemenezes/" target="blank"> <div className="btnInsta btnSM">  <img src={svgInsta} alt="" /> </div> </a>

        <a href="https://api.whatsapp.com/send?phone=5511940666426&text=Ol%C3%A1%2C+gostaria+de+algumas+informa%C3%A7%C3%B5es" target="blank">  <div className="btnWhats btnSM"> <img src={svgWhats} alt="" /> </div> </a>
    </div>
    )
}

