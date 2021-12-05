import './styles.css'
import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { useState } from 'react'

import pngHome from '../../img/home.png'
import pngCalendar from '../../img/calendar.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from '../../Components/NavItem';
import { TimeBarItem } from './TimeBarItem';
import { ScheduledTimesItem } from './ScheduledTimesItem';
import { PinkBar } from '../../Components/PinkBar';
import { useEffect } from 'react'
import { api } from '../../services/api'

dayjs.extend(tz)
dayjs.extend(utc)

function Dashboard () {    
    const [appointments, setAppointments] = useState([])

    useEffect(() => {        
        const now = dayjs.utc().local().format()

        const [date] = now.split('T')

        console.group('TIME')
        console.log(`${date}T00:00:00`)
        console.log(`${date}T23:59:59`)
        console.groupEnd()

        api.get('/appointment/day', {
            params: {
                initialDate: `${date}T00:00:00`,
                finalDate: `${date}T23:59:59`
            }
        }).then(response => {
            console.log(response.data.appointments)

            setAppointments(response.data.appointments)
        })
    }, [])
    
    return(    
        <>
        <PinkBar />
        <div className="container">
            <div className="header">
                <div className="header-child-container">
                    <h1 className="msg"> Bom dia! </h1>
                    <p className="sub-msg"> Segunda, 12 de março </p>
                </div>
                <div className="logo">
                    <Logo />
                </div>
            </div>
            <div className="bar-options">
                <div className="nav-bar-container">
                    <NavItem text="Tela inicial" src={pngHome} link="/dashboard" color="white"/>
                    <NavItem text="Visualizar calendário" src={pngCalendar} link="/calendar"/>
                    <NavItem text="Marcar consulta" src={pngPlus}  link="/appointment/new" />
                    <NavItem text="Pesquisar consulta" src={pngSearch}  link="/search" />
                </div>            
            </div>
        </div>
        <div className="gray-container">
            <div className="dash-container">
                <table>
                    <tbody>
                        {appointments.map(appointment => {
                            const hour = dayjs
                            .utc(appointment.dateTime)
                            .tz('America/Sao_Paulo')
                            .format('HH:mm')
                            
                            return (<tr key={appointment.id}>
                                <td className="time-bar">
                                    <TimeBarItem hour={hour} />
                                </td>
                                <td className="scheduled-times">
                                    <ScheduledTimesItem 
                                        nameCheck={appointment.user.name} 
                                        hourCheck={hour} 
                                        numberCheck={appointment.id} 
                                    />
                                </td>
                            </tr>)
                        })}
                        {appointments.length === 0 && (
                            <tr>
                                <h3>Sem agendamentos para hoje.</h3>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Dashboard;