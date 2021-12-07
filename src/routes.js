import React from 'react'
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from 'history'

/*PAGES ADM */
import Login from './Templates/HomeLogin';
import Recoverypass  from './Templates/_RecoveryPass/RecoveryPass' // Recuperação de senha
import ConfirmCod from './Templates/_RecoveryPass/ConfirmCod'; // Confirmação de código
import NewPass from './Templates/_RecoveryPass/NewPass'; // Nova senha
import PassChanged  from './Templates/_RecoveryPass/PassChanged'; // Senha alterada
import Dashboard from './Templates/Dashboard'; // Dashboard
import NewAppointment from './Templates/NewAppointment';
import SearchAppointments from './Templates/SearchAppointments';

/* PAGES SITE */
import Home  from './Templates/Site/Home';
import { Contato } from './Templates/Site/Contato';


import { Ortopedica } from './Templates/Site/Especialidades/Ortopedica';
import ProtectedRoute from './Components/ProtectedRoute';
import Patient from './Templates/Patient';
import Profile from './Templates/Patient/Profile';
import { PrePosOperatorio } from './Templates/Site/Especialidades/PrePosOperatorio';
import { Neurologia } from './Templates/Site/Especialidades/Neurologia';
import { Tratamentos } from './Templates/Site/Especialidades/Tratamentos';

import Appointment from './Templates/Appointment';



export default function Routes() {
  const history = createBrowserHistory()
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/especialidades/ortopedica" component={Ortopedica} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/especialidades/ortopedica" component={Ortopedica} />
        <Route exact path="/especialidades/pre-pos-operatorio" component={PrePosOperatorio} />
        <Route exact path="/especialidades/neurologia" component={Neurologia} />
        <Route exact path="/especialidades/tratamentos" component={Tratamentos} />
        {/* Home de Login */}
        <Route exact path='/adm' component={Login} />
        {/* Recuperar senha */}
        <Route exact path='/recoverypass' component={Recoverypass} />
        {/* Confirmar código */}
        <Route exact path='/confirmcod' component={ConfirmCod} />
        {/* Digitar nova senha */}
        <Route exact path='/newpass' component={NewPass} />
        {/* Senha alterada com sucesso */}
        <Route exact path='/passchanged' component={PassChanged} />
        {/* Dashboard Administrativo */}
        <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        {/* Novo agendamento */}
        <ProtectedRoute exact path='/appointment/new' component={NewAppointment}/>
        {/* Pesquisar consultas agendadas */}
        <ProtectedRoute exact path='/search' component={SearchAppointments}/>
        {/* Informações de uma consulta específica */}
        <ProtectedRoute exact path='/appointment/:id' component={Appointment}/>
        {/* Dashboard do cliente */}
        <ProtectedRoute exact path='/patient' component={Patient} />
        {/* Informacoes do cliente */}
        <ProtectedRoute exact path='/patient/profile' component={Profile} />
      </Switch>
    </Router>
  )
}