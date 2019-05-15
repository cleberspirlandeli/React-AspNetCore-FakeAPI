import React from 'react'

// DOCs react-router-dom
// https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Clientes from '../cliente/cliente'
import Pedidos from '../pedidos/pedidos'
import TesteForm from '../cliente/clienteForm'
// import ComponenteDePagina404 from '...'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Pedidos} />
            {/* <Route path="/clientes" component={Clientes} /> */}
            <Route path="/clientes" exact={true} component={TesteForm} />
            <Route path="/pedidos" component={Pedidos} />
            <Route path='*' component={() => <h1>Page 404</h1>} />
        </Switch>
    </ BrowserRouter>
)
export default Routes