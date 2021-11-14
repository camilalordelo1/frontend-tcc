import './styles.css'

import svgInsta from '../../../../img/icon-insta.svg'

export const Instagram = () => {
    return(
        <a href="https://www.instagram.com/fisiomichelemenezes/" target="blank"> <div className="btnInsta btnSM">  <img src={svgInsta} alt="" /> </div> </a>
    )
}