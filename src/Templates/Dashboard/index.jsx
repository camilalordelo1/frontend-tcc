import './styles.css'

import pngHome from '../../img/home.png'
import pngCalendar from '../../img/calendar.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from '../../Components/NavItem';
import { TimeBarItem } from './TimeBarItem';
import { ScheduledTimesItem } from './ScheduledTimesItem';
import { PinkBar } from '../../Components/PinkBar';

function Dashboard () {
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
                <tr>
                    <td className="time-bar">
                        <TimeBarItem hour="09:00" />
                    </td>
                    <td className="scheduled-times">
                        <ScheduledTimesItem 
                            nameCheck="Patrícia" 
                            hourCheck="13:00" 
                            numberCheck={1} 
                        />
                        <ScheduledTimesItem 
                            nameCheck="Patrícia" 
                            hourCheck="13:00" 
                            numberCheck={1} 
                        />
                        <ScheduledTimesItem 
                            nameCheck="Patrícia" 
                            hourCheck="13:00" 
                            numberCheck={1} 
                        />
                    </td>
                </tr>
                <tr>
                    <td className="time-bar">
                        <TimeBarItem hour="09:00" />
                    </td>
                    <td className="scheduled-times">
                        <ScheduledTimesItem 
                            nameCheck="Patrícia" 
                            hourCheck="13:00" 
                            numberCheck={1} 
                        />
                    </td>
                </tr>
                <tr>
                    <td className="time-bar">
                        <TimeBarItem hour="09:00" />
                    </td>
                    <td className="scheduled-times">
                        <ScheduledTimesItem 
                            nameCheck="Patrícia" 
                            hourCheck="13:00" 
                            numberCheck={1} 
                        />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </>
    )
}

export default Dashboard;