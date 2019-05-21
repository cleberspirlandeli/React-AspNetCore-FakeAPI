import React from 'react'

// DOCs react-router-dom
// https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d
import { Switch, Route, Redirect } from 'react-router'

import Clientes from '../cliente/cliente'
import Pedidos from '../pedidos/pedidos'
// import ComponenteDePagina404 from '...'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Pedidos} />
        <Route exact path="/clientes/listar" component={Clientes} />
        <Route exact path="/clientes/cadastrar" component={Clientes} />
        {/* <Route path="/clientes" exact={true} component={TesteForm} /> */}
        <Route path="/pedidos" component={Pedidos} />
        <Route path='*' component={() => <h1>Page 404</h1>} />
    </Switch>
)
export default Routes