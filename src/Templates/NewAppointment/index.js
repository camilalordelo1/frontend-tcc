import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { useForm } from 'react-hook-form';
import tz from 'dayjs/plugin/timezone'
import dayjs from 'dayjs';

import './styles.css'

import pngHome from '../../img/home.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from '../../Components/NavItem';
import { PinkBar } from '../../Components/PinkBar';
import { InputDefault } from '../../Components/InputDefault'
import { BtnDefaultPink1 } from '../../Components/_BtnsDefault/BtnDefaultPink1'
import { api } from '../../services/api';
import LogoutButton from '../../Components/_BtnsDefault/LogoutButton';

dayjs.extend(tz)

export default function NewAppointment() {
  const [patient, setPatient] = useState({})
  const [phoneState, setPhoneState] = useState('')
  
  const history = useHistory()

  const { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
        cpf: undefined,
        name: undefined,
        email: undefined,
        phone: undefined,
        date: undefined,
        time: undefined,
        comments: undefined,
        appointmentType: undefined
    }
  })  

  const searchpatient = async () => {
    const cpfInput = getValues('cpf')

    const cpf = cpfInput.replace(/[_.-\s]/g, "")

    if (cpf.length < 11) {
      return
    }

    api.get('/user', {
      params: {
        cpf
      }
    })
      .then(response => {
        console.log(response.data)
        setPatient(response.data)
        setValue("email", response.data.email)
        setValue("phone", response.data.phone)
        setPhoneState(response.data.phone)
        setValue("name", response.data.name)
      })
      .catch(err => console.log(err))
  }

  const handleFormSubmit = handleSubmit(async (fields) => {
    const dateTime = 
      dayjs(`${fields.date} ${fields.time}`)
        .tz('America/Sao_Paulo')
        .format()

    delete fields.date
    delete fields.time

    api.post('/appointment', {
      ...fields,
      dateTime
    }).then(() => history.push('/dashboard'))
  })

  return(    
    <>
      <PinkBar />
      <div className="container">
          <div className="header">
            <div className="sameLine" style={{justifyContent: 'space-between', width: '100%'}}>
              <div className="logo">
                <Logo />
              </div>
              <LogoutButton />
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
                  Marcar consulta
                </h1>
              </div>           
          </div>
          <main className="admPages">
            <h1>
              Nova Consulta
            </h1>
            <form onSubmit={handleFormSubmit}>
              <InputDefault
                mask="999.999.999-99"
                typeInput="text" 
                id="patientCPF" 
                labelName="CPF do Paciente"
                style={ { width: '32%' } }
                {...register("cpf", {
                  required: false,
                  setValueAs: value => value?.replace(/\D+/g, ''),
                  onBlur: searchpatient
                })}
              />
              <InputDefault 
                typeInput="text" 
                id="patientName"
                labelName="Nome do Paciente"
                defaultValue={patient.name}
                {...register("name", {
                  required: false
                })}
              />
              <div className="sameLine">
                <InputDefault 
                  typeInput="email" 
                  id="patientEmail" 
                  labelName="E-mail do Paciente"
                  defaultValue={patient.email}
                  {...register("email", {
                    required: false
                  })}
                />
                <InputDefault 
                  mask="(99) 99999-9999"
                  typeInput="tel" 
                  id="phone" 
                  labelName="Telefone Celular"
                  value={phoneState}
                  {...register("phone", {
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
                  labelName="Data da consulta" 
                  {...register("date", {
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="time" 
                  id="appointmentHour" 
                  labelName="Horário da consulta"
                  {...register("time", {
                    required: false
                  })}
                />
                <InputDefault 
                  typeInput="text" 
                  id="AppointmentType" 
                  labelName="Tipo de consulta"
                  {...register("appointmentType", {
                    required: false
                  })}
                />
              </div>
              <div id="commentsField">
                <label htmlFor="commentsTextarea">Anotações</label>
                <textarea 
                  id="commentsTextarea" 
                  {...register("comments", {
                    required: false,
                    maxLength: 1200
                  })}
                />
              </div>
              <BtnDefaultPink1 value="Enviar" type="submit" />
            </form>
          </main>
      </div>
    </>
    )
}