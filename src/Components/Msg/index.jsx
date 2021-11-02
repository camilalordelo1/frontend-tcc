import './styles.css'

import { ComebackHome } from '../ComebackHome';
import { BtnSocialMedia } from '../_NavElements/BtnSocialMedia';
import { Logo } from '../_NavElements/Logo';


export const Msg = (props) => {
    const { msg } = props;
    return(
        <>
        <div className="container">
            <div className="nav">
                <Logo />
                <BtnSocialMedia />
                
            </div>
            <main>
                <h1> {msg} </h1>
            </main>
        </div>
        <ComebackHome />
        </>
    ) 
}