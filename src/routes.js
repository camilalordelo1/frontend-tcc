import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
<<<<<<< HEAD

  // ESPECIALIDADES
  import { Ortopedica } from './Templates/Site/Especialidades/Ortopedica';
  import { PrePosOperatorio } from './Templates/Site/Especialidades/PrePosOperatorio';
=======
import Appointment from './Templates/Appointment';
  // ESPECIALIDADES
import { Ortopedica } from './Templates/Site/Especialidades/Ortopedica';
>>>>>>> 57f8ad36b55c98de32a1a29e8279a75b682c4fea

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/especialidades/ortopedica" component={Ortopedica} />
        <Route path="/especialidades/pre-pos-operatorio" component={PrePosOperatorio} />
        {/* Home de Login */}

        <Route path='/adm' component={Login} />
        {/* Recuperar senha */}
        <Route path='/recoverypass' component={Recoverypass} />
        {/* Confirmar código */}
        <Route path='/confirmcod' component={ConfirmCod} />
        {/* Digitar nova senha */}
        <Route path='/newpass' component={NewPass} />
        {/* Senha alterada com sucesso */}
        <Route path='/passchanged' component={PassChanged} />
        {/* Dashboard Administrativo */}
        <Route path='/dashboard' component={Dashboard}/>
        {/* Novo agendamento */}
        <Route path='/appointment/new' component={NewAppointment}/>
        {/* Pesquisar consultas agendadas */}
        <Route path='/search' component={SearchAppointments}/>
        {/* Informações de uma consulta específica */}
        <Route path='/appointment/:id' component={Appointment}/>
      </Switch>
    </BrowserRouter>
  )
}