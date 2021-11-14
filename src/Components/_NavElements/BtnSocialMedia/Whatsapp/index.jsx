import './styles.css'

import svgWhats from '../../../../img/icon-whats.svg'

export const Whatsapp = () => {
    return(
        <a href="https://api.whatsapp.com/send?phone=5511940666426&text=Ol%C3%A1%2C+gostaria+de+algumas+informa%C3%A7%C3%B5es" target="blank">  <div className="btnWhats btnSM"> <img src={svgWhats} alt="" /> </div> </a>
    )
}