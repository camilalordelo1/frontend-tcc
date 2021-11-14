import { Facebook } from './Facebook'
import { Instagram } from './Instagram'


import './styles.css'
import { Whatsapp } from './Whatsapp'


export const BtnSocialMedia = () => {
    return (
    <div className="btnsSocialMedia">

        <Whatsapp />

        <Facebook />

        <Instagram />

    </div>
    )
}

