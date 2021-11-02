import './styles.css'

import { BoxDefault } from '../../../Components/BoxDefault';
import { ComebackHome } from '../../../Components/ComebackHome';
import { TitleDefault } from '../../../Components/TitleDefault';
import { Logo } from '../../../Components/_NavElements/Logo';
import { PinkBar } from '../../../Components/PinkBar';

export const ParentPass = (props) =>  {
    const {title, conteudo } = props;
    return(
        <>
        <PinkBar />
        <div className="container">
            <Logo />
            <TitleDefault text="Recuperar Senha"/>
            <BoxDefault title={title} conteudo={conteudo} />
            <ComebackHome />
        </div>
        </>
    );
}
