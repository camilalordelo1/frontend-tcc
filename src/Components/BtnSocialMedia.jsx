import svgFace from '../img/icon-face.svg'
import svgInsta from '../img/icon-insta.svg'
import svgWhats from '../img/icon-whats.svg'

export const BtnSocialMedia = () => {
    return (
    <div className="btnsSocialMedia">
        <div className="btnFace btnSM"> <img src={svgFace} alt=""/></div>
        <div className="btnInsta btnSM"> <img src={svgInsta} alt=""/> </div>
        <div className="btnWhats btnSM"> <img src={svgWhats} alt=""/> </div>
    </div>
    )
}

