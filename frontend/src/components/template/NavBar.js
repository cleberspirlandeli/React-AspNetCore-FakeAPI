import React from 'react'
// <nav className="navbar navbar-expand-lg navbar-light bg-light">

export default props =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container">
                <a className="navbar-brand" href="#">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Pedidos <span className="badge badge-light text-white bg-danger">4</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Clientes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Marketing</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="d-flex justify-content-end nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Configurações
                        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Perfil</a>
                                    <a className="dropdown-item" href="#">Sistema</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    </div>