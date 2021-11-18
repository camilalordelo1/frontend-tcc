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

export default function NewAppointment() {
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
                  <NavItem text="Marcar consulta" src={pngPlus}  link="/appointment/new" color="white" />
                  <NavItem text="Pesquisar consulta" src={pngSearch}  link="/search" />
              </div>
              <div className="title-text">
                <h1>
                  Marcar consulta
                </h1>
              </div>           
          </div>
          <main id="newAppointment">
            <h1>
              Nova Consulta
            </h1>
            <form>
              <InputDefault 
                typeInput="text" 
                id="patitentName" 
                labelName="Nome do Paciente" 
              />
              <div className="sameLine">
                <InputDefault 
                  typeInput="text" 
                  id="patitentCPF" 
                  labelName="CPF do Paciente" 
                />
                <InputDefault 
                  typeInput="email" 
                  id="patitentEmail" 
                  labelName="E-mail do Paciente" 
                />
                <InputDefault 
                  typeInput="tel" 
                  id="phone" 
                  labelName="Telefone Celular" 
                />
              </div>
              <div className="sameLine">
                <InputDefault 
                  typeInput="date" 
                  id="appointmentDate" 
                  labelName="Data da consulta" 
                />
                <InputDefault 
                  typeInput="time" 
                  id="appointmentHour" 
                  labelName="Horário da consulta" 
                />
                <InputDefault 
                  typeInput="text" 
                  id="AppointmentType" 
                  labelName="Tipo de consulta" 
                />
              </div>
              <div id="commentsField">
                <label htmlFor="commentsTextarea">Anotações</label>
                <textarea id="commentsTextarea"/>
              </div>
              <BtnDefaultPink1 value="Enviar"/>
            </form>
          </main>
      </div>
    </>
    )
}