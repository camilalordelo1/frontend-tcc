import './App.css';
import { BarraRosa } from './Components/BarraRosa';

// COMPONENTS
import { BtnSocialMedia } from './Components/BtnSocialMedia';
import { Logo } from './Components/Logo'

function App() {
  return (
  <div className="App">
    <BarraRosa />
    <div className="inicio">
      <div className="navbar">
        <Logo />
        <BtnSocialMedia/>
      </div>
      <div className="login-adm"> 
        <h1> Área Administrativa </h1>
        <div className="painel-login">
          <div className="top-painel-login"> 
            <h1> Login </h1>
          </div>

          <form>
            <div className="inputs-login">
              <div className="input-padrao">
                  <label className="input-filho" >E-mail</label>
                  <input className="input-filho" type="email"/>
              </div>
              <div className="input-padrao">
                  <label className="input-filho">Senha</label>
                  <input className="input-filho" type="password"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
