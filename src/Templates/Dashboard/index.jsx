import './styles.css'

import pngHome from '../../img/home.png'
import pngCalendar from '../../img/calendar.png'
import pngPlus from '../../img/plus.png'
import pngSearch from '../../img/search.png'

import { Logo } from '../../Components/_NavElements/Logo';
import { NavItem } from './NavItem';
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
                <NavItem text="Marcar consulta" src={pngPlus}  link="/new" />
                <NavItem text="Pesquisar consulta" src={pngSearch}  link="/search" />
            </div>            
        </div>
    </div>
    <div className="gray-container">
        <div className="dash-container">
            <div className="time-bar">
                <div className="time-bar-scroll">
                    <TimeBarItem hour="09:00" index="1"/>
                    <TimeBarItem hour="10:00" index="2"/>
                    <TimeBarItem hour="11:00" index="3"/>
                    <TimeBarItem hour="12:00" index="4"/>
                    <TimeBarItem hour="13:00" index="5"/>
                    <TimeBarItem hour="14:00" index="6"/>
                </div>
            </div>
            <div 
            //nameCheck, hourCheck, numberCheck 
            className="scheduled-times">
                <ScheduledTimesItem nameCheck="Patrícia" hourCheck="13:00" numberCheck={1} />
            </div>
        </div>
    </div>
    </>
    )
}

export default Dashboard;