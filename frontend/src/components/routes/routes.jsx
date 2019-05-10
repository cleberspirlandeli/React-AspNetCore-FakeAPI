import React from 'react'

// DOCs react-router-dom
// https://medium.com/collabcode/roteamento-no-react-com-os-poderes-do-react-router-v4-fbc191b9937d
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Clientes from '../cliente/cliente'
import Pedidos from '../pedidos/pedidos'
// import ComponenteDePagina404 from '...'


// export default props => (
//     <BrowserRouter>
//         <Switch>
//             <Route exact path="/" exact={true} component={Clientes} />
//             <Route path="/clientes" exact={true} component={Clientes} />
//             <Route path="/pedidos" component={Pedidos} />
//             {/* <Route path='*' component={ComponenteDePagina404} /> */}
//         </Switch>
//     </ BrowserRouter>
// )

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Clientes} />
            <Route path="/clientes" exact={true} component={Clientes} />
            <Route path="/pedidos" component={Pedidos} />
            <Route path='*' component={() => <h1>Page 404</h1>} />
        </Switch>
    </ BrowserRouter>
)
export default Routes