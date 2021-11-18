import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*PAGES ADM */
import Login from './Templates/HomeLogin';
import Recoverypass  from './Templates/_RecoveryPass/RecoveryPass' // Recuperação de senha
import ConfirmCod from './Templates/_RecoveryPass/ConfirmCod'; // Confirmação de código
import NewPass from './Templates/_RecoveryPass/NewPass'; // Nova senha
import PassChanged  from './Templates/_RecoveryPass/PassChanged'; // Senha alterada
import Dashboard from './Templates/Dashboard'; // Dashboard

/* PAGES SITE */
import Home  from './Templates/Site/Home';
import { Contato } from './Templates/Site/Contato';
import NewAppointment from './Templates/NewAppointment';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home} />
          <Route exact path="/contato" component={Contato} />
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
          <Route exact path='/dashboard' component={Dashboard}/>
          {/* Novo agendamento */}
          <Route exact path='/appointment/new' component={NewAppointment}/>
      </Switch>
    </BrowserRouter>
  )
}