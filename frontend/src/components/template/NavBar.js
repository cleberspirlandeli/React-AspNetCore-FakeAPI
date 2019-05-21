import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container">
                <a href="#" className="navbar-brand">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/pedidos" className="nav-link">Pedidos <span className="badge badge-light text-white bg-danger">4</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clientes/listar" className="nav-link">Clientes</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/marketing" className="nav-link">Marketing</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="d-flex justify-content-end nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Configurações
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a href="/" className="dropdown-item">Perfil</a>
                                    <a href="/" className="dropdown-item">Sistema</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="/logout" className="dropdown-item">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    </div>