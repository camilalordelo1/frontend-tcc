import { useForm } from 'react-hook-form';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

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
import { api } from '../../services/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

dayjs.extend(utc)
dayjs.extend(tz)

export default function SearchAppointments() {
  const [appointments, setAppointments] = useState([])
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
        patientName: undefined,
        patientCpf: undefined,
        initialDateTime: undefined,
        finalDateTime: undefined
    }
  })

  const onSubmit = handleSubmit(async (fields) => {
    Object.keys(fields).forEach(key => {
      if (!fields[key]) {
        delete fields[key]
      }
    })
    
    api.get('/appointment', {
      params: fields
    })
      .then(response => {
        console.log(response.data)
        setAppointments(response.data.appointments)
      })
      .catch(error => console.log(error))
  })
  
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
            <form onSubmit={onSubmit}>
              <div className="sameLine">
                <InputDefault
                  mask="999.999.999-99"
                  typeInput="text" 
                  id="patitentCPF" 
                  labelName="CPF do Paciente" 
                  {...register("patientCpf", {
                    setValueAs: value => value?.replace(/\D+/g, ''),
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="text" 
                  id="patitentName" 
                  labelName="Nome do Paciente"
                  {...register("patientName", {
                    required: false
                  })}
                />
              </div>
              <div className="sameLine">
                <InputDefault 
                  typeInput="datetime-local" 
                  id="appointmentInitialDatetime" 
                  labelName="Data e hora inicial"
                  {...register("initialDateTime", {
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="datetime-local" 
                  id="appointmentFinalDatetime" 
                  labelName="Data e hora final"
                  {...register("finalDateTime", {
                    required: false
                  })} 
                />
              </div>
              <BtnDefaultPink1 value="Pesquisar" type="submit" />
            </form>
            <section id="returnedAppointments">
              {appointments.map(appointment => (
                <Link to={`/appointment/${appointment.id}`} key={appointment.id}>
                  <article>
                      <header>
                        <h4>{appointment.user.name}</h4>
                        <p>{`Consulta ${appointment.id}`}</p>
                      </header> 
                      <p>
                        {dayjs
                          .utc(appointment.dateTime)
                          .tz('America/Sao_Paulo')
                          .format('DD/MM - HH:mm')}
                      </p>
                  </article>
                </Link>
              ))}
            </section>
          </main>
      </div>
    </>
    )
}