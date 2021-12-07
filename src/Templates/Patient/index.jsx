import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

import { PinkBar } from "../../Components/PinkBar";
import { Logo } from "../../Components/_NavElements/Logo";
import AppointmentField from '../../Components/AppointmentField';
import { api } from '../../services/api';
import Modal from '../../Components/Modal';
import dayjs from 'dayjs';
import LogoutButton from '../../Components/_BtnsDefault/LogoutButton';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Patient() {
  const [appointments, setAppointments] = useState([])
  
  const { setUserInfo } = useContext(AuthContext)

  useEffect(() => {
    api.get('/appointment')
      .then(resp => {
        setAppointments(resp.data.appointments)
        setUserInfo(resp.data.appointments[0].user)
      })
      .catch(err => console.log(err?.response))
  }, [setUserInfo])

  return(
    <>
      <Modal />
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
            <LogoutButton />
          </div>
        </header>
        <section id="greetings">
          <header>
            <h1>
              Bom dia {appointments[0]?.user?.name}, 
              <br/> 
              você tem {appointments?.length}
              {appointments?.length > 1 ? " consultas" : " consulta" }.
            </h1>
            <p>Em caso de dúvidas, entre em contato conosco!<br/> (11) 94066-6426</p>
          </header>
        </section>
        <section id="patientAppointments">
          {appointments?.map(appointment => {            
            const dateIsLessFiveDays = dayjs
            .utc(appointment.dateTime)
            .diff(dayjs.utc(), "day") <= 5

            return (
              <AppointmentField 
                key={appointment.id}
                dateTime={appointment.dateTime}
                id={appointment.id}
                className="patientAppointment"
              >
                <a 
                  href={
                    `${process.env.REACT_APP_BASE_URL}/appointment/${appointment.confirmationCode}`
                  } 
                  target="_blank"
                  rel="noreferrer"
                >
                  {dateIsLessFiveDays &&
                    (appointment.confirmed ? 
                      (
                        <button className="alreadyConfirmed appointmentButton">
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
              </AppointmentField>
            )
          })}
        </section>
      </div>
    </>
  )
}