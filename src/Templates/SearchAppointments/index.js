import './styles.css'

import pngHome from '../../img/home.png'
import pngCalendar from '../../img/calendar.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from '../../Components/NavItem';
import { PinkBar } from '../../Components/PinkBar';
import { InputDefault } from '../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../Components/_BtnsDefault/BtnDefaultPink1'

export default function SearchAppointments() {
    return(    
    <>
      <PinkBar />
      <div className="container">
          <div className="header">
              <div className="logo">
                  <Logo />
              </div>
          </div>
          <div className="bar-options">
              <div className="nav-bar-container">
                  <NavItem text="Tela inicial" src={pngHome} link="/dashboard"/>
                  <NavItem text="Visualizar calendário" src={pngCalendar} link="/calendar"/>
                  <NavItem text="Marcar consulta" src={pngPlus}  link="/appointment/new" />
                  <NavItem text="Pesquisar consulta" src={pngSearch}  link="/search" color="white" />
              </div>
              <div className="title-text">
                <h1>
                  Pesquisar Consultas
                </h1>
              </div>           
          </div>
          <main className="admPages">
            <h1>
              Filtros
            </h1>
            <form>
              <div className="sameLine">
                <InputDefault 
                  typeInput="text" 
                  id="patitentName" 
                  labelName="Nome do Paciente" 
                />
                <InputDefault
                  mask="999.999.999-99"
                  typeInput="text" 
                  id="patitentCPF" 
                  labelName="CPF do Paciente" 
                />
              </div>
              <div className="sameLine">
                <InputDefault 
                  typeInput="datetime-local" 
                  id="appointmentInitialDatetime" 
                  labelName="Data e hora inicial" 
                />
                <InputDefault 
                  typeInput="datetime-local" 
                  id="appointmentFinalDatetime" 
                  labelName="Data e hora final" 
                />
              </div>
              <BtnDefaultPink1 value="Pesquisar"/>
            </form>
          </main>
      </div>
    </>
    )
}