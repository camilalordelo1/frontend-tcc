import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';

import { PinkBar } from "../../../Components/PinkBar";
import { Logo } from "../../../Components/_NavElements/Logo";
import { BtnDefaultPink1 } from '../../../Components/_BtnsDefault/BtnDefaultPink1';
import { InputDefault } from '../../../Components/InputDefault'

import { api } from '../../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export default function Profile() {  
  const history = useHistory()
  const {userInfo} = useContext(AuthContext)

  const { register } = useForm({
    defaultValues: {
      patientName: undefined,
      patientCpf: undefined,
      patientEmail: undefined,
      patientPhone: undefined
    }
  })

  const handleLogout = () => {
    api.delete('/auth/logout')
      .then(() => {
        localStorage.clear()
        history.push('/adm')
      })
  }

  return (
    <>
      <PinkBar />
      <div className="container">
        <header className="header">
          <div className="logo">
            <Logo />
          </div>
          <div className="flexAlignCenter">
            <nav id="nav-buttons">
              <ul id="nav-links">
                <li><Link to="/patient">Início</Link></li>
                <li><Link to="/patient/profile">Acessar perfil</Link></li>
              </ul>
            </nav>
            <BtnDefaultPink1 
              type="button" 
              value="Sair" 
              onClick={handleLogout}
            />
          </div>
        </header>
        <section id="greetings" style={{padding: '0'}}>
          <h1>Seus Dados</h1>
        </section>
        <section>
          <form>
            <InputDefault 
              typeInput="text" 
              id="patientName" 
              labelName="Nome"
              defaultValue={userInfo.name}
              {...register("patientName", {
                required: false
              })} 
            />
            <div className="sameLine">
              <InputDefault 
                typeInput="text" 
                id="patientCPF" 
                labelName="CPF"
                defaultValue={userInfo.cpf}
                mask="999.999.999-99"
                {...register("patientCpf", {
                  required: false,
                })} 
              />
              <InputDefault 
                typeInput="text" 
                id="patientEmail" 
                labelName="Email"
                defaultValue={userInfo.email}
                {...register("patientEmail", {
                  required: false
                })} 
              />
              <InputDefault 
                typeInput="text" 
                id="patientPhone" 
                mask="(99) 99999-9999"
                labelName="Celular"
                value={userInfo.phone}
                {...register("patientPhone", {
                  required: false
                })} 
              />
            </div>
          </form>
        </section>
      </div>
    </>
  )
}