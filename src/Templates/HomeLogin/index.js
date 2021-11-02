import './styles.css';

// COMPONENTS
import { BtnSocialMedia } from '../../Components/_NavElements/BtnSocialMedia';
import { Logo } from '../../Components/_NavElements/Logo'
import { TitleDefault } from '../../Components/TitleDefault';
import { BoxDefault } from '../../Components/BoxDefault';
import { FormLogin } from './FormLogin'
import { PinkBar } from '../../Components/PinkBar';


function HomeLogin() {
  return (
  <>
  <PinkBar />
    <div className="container">
      <div className="navbar">
        <Logo />
        <BtnSocialMedia/>
      </div>

      <TitleDefault text="Área Administrativa" />
      
      <BoxDefault title="Login" conteudo={<FormLogin />} />
    </div>
  </>
  );
}

export default HomeLogin;
