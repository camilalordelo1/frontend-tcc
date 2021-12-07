import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

import pngHome from '../../img/home.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from '../../Components/NavItem';
import { PinkBar } from '../../Components/PinkBar';
import { InputDefault } from '../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../Components/_BtnsDefault/BtnDefaultPink1'

import { api } from '../../services/api'
import Modal, { openModal } from '../../Components/Modal';
import { useHistory } from 'react-router-dom';

dayjs.extend(utc)
dayjs.extend(tz)

export default function Appointment({ match }) {
  const [appointment, setAppointmentInfo] = useState({})
  const [phoneState, setPhoneState] = useState('')
  const [cpfState, setCPFState] = useState('')
  const [timeState, setTimeState] = useState('')
  const [dayState, setDayState] = useState('')

  const history = useHistory()

  useEffect(() => {
    api.get(`/appointment`, {
      params: {
        id: match.params.id
      }
    })
    .then(response => {
      console.log(response.data)
      setPhoneState(response.data.appointments[0].user.phone)
      setCPFState(response.data.appointments[0].user.cpf)
      setTimeState(
        dayjs
        .utc(response.data.appointments[0].dateTime)
        .tz('America/Sao_Paulo')
        .format('HH:mm')
      )
      setDayState(
        dayjs
        .utc(response.data.appointments[0].dateTime)
        .tz('America/Sao_Paulo')
        .format('YYYY-MM-DD')
      )
      setAppointmentInfo(response.data.appointments[0])
    })
    .catch(() => history.push('/dashboard'))

    return function cleanup() {
      const body = document.body

      body.style.overflow = 'auto'
    }
  }, [match.params.id, history])
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
        user: {
          cpf: undefined,
          name: undefined,
          email: undefined,
          phone: undefined,
        },
        date: undefined,
        time: undefined,
        comments: undefined,
        appointmentType: undefined
    }
  })
  
  const handleFormSubmit = handleSubmit(async fields => {
    const { id } = match.params
    
    Object.keys(fields).forEach(key => {
      if (fields[key].length === 0 || !fields[key]) {
        delete fields[key]
      }
    })

    Object.keys(fields.user).forEach(key => {
      if (fields.user[key].length === 0 || !fields.user[key]) {
        delete fields.user[key]
      }
    })

    const dateTime = 
      dayjs 
        .tz(`${fields.date || dayState} ${fields.time || timeState}`, 'America/Sao_Paulo')
        .utc()
        .format()
    
    delete fields.date
    delete fields.time

    api.put('/appointment', {
      ...fields,
      dateTime,
      id
    }).then(response => console.log(response))
  })

  const handleDeleteAppointment = () => {
    api.delete('/appointment', {
      params: {
        appointmentId: appointment.id,
        jobId: appointment.taskId
      }
    })
    .then(() => history.push('/dashboard'))
    .catch(err => console.log(err))
  }

  return(    
    <>
      <Modal 
        title="Desmarcar consulta?"
        date={dayState}
        time={timeState}
        callback={handleDeleteAppointment}
      />
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
                  <NavItem text="Marcar consulta" src={pngPlus}  link="/appointment/new" color="white" />
                  <NavItem text="Pesquisar consulta" src={pngSearch}  link="/search" />
              </div>
              <div className="title-text">
                <h1>
                  Consulta {match.params.id}
                </h1>
              </div>           
          </div>
          <main className="admPages" style={{marginTop: '1.6rem'}}>
            <a href={
                `${process.env.REACT_APP_BASE_URL}/appointment/${appointment.confirmationCode}`
              } 
              target="_blank"
              rel="noreferrer"
            >
              {dayjs
                .utc(appointment.dateTime)
                .diff(dayjs.utc(), "day") <= 5 &&
                (appointment.confirmed ? 
                  (
                    <button className="alreadyConfirmed appointmentButton" >
                      Consulta Confirmada
                    </button>
                  ) : (
                    <button className="confirmAppointment appointmentButton">
                      Confirmar presença
                    </button>
                  )
                )
              }
            </a>
            <form onSubmit={handleFormSubmit}> 
            
              <InputDefault
                mask="999.999.999-99"
                typeInput="text" 
                id="patientCPF" 
                labelName="CPF do Paciente"
                value={cpfState}
                style={ { width: '32%' } }
                {...register("user.cpf", {
                  required: false,
                  setValueAs: value => value?.replace(/\D+/g, ''),
                  onChange: e => setCPFState(e.target.value)
                })}
              />
              <InputDefault 
                typeInput="text" 
                id="patientName"
                labelName="Nome do Paciente"
                defaultValue={appointment?.user?.name}
                {...register("user.name", {
                  required: false
                })}
              />
              <div className="sameLine">
                <InputDefault 
                  typeInput="email" 
                  id="patientEmail" 
                  labelName="E-mail do Paciente"
                  defaultValue={appointment?.user?.email}
                  {...register("user.email", {
                    required: false
                  })}
                />
                <InputDefault 
                  mask="(99) 99999-9999"
                  typeInput="tel" 
                  id="phone" 
                  labelName="Telefone Celular"
                  value={phoneState}
                  {...register("user.phone", {
                    required: false,
                    setValueAs: value => value?.replace(/\D+/g, ''),
                    onChange: e => setPhoneState(e.target.value)
                  })}
                />
              </div>
              <div className="sameLine">
                <InputDefault 
                  typeInput="date" 
                  id="appointmentDate"
                  defaultValue={dayState}
                  labelName="Data da consulta" 
                  {...register("date", {
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="time" 
                  id="appointmentHour"
                  defaultValue={timeState}
                  labelName="Horário da consulta"
                  {...register("time", {
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="text" 
                  id="AppointmentType" 
                  labelName="Tipo de consulta"
                  defaultValue={appointment?.appointmentType}
                  {...register("appointmentType", {
                    required: false
                  })}
                />
              </div>
              <div id="commentsField">
                <label htmlFor="commentsTextarea">Anotações</label>
                <textarea 
                  id="commentsTextarea" 
                  defaultValue={appointment.comments}
                  {...register("comments", {
                    required: false,
                    maxLength: 1200
                  })}
                />
              </div>
              <div>
                <BtnDefaultPink1 
                  value="Atualizar" 
                  type="submit" 
                  style={{backgroundColor: 'var(--primary-blue)'}}
                />
                <BtnDefaultPink1 
                  value="Desmarcar" 
                  type="button"
                  callback={openModal}
                  style={{marginLeft: '1.6rem'}} 
                />
              </div>
            </form>
          </main>
      </div>
    </>
    )
}