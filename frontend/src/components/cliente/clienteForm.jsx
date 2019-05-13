import React from 'react'
import Button from '../template/Button'

import { Link } from 'react-router-dom'


const ClienteForm = (props) => {

    let client = props.cliente || []
    const errors = {}

    console.log('Cliente Form')

    console.log(client)
    console.log('statusCliente -> ' +props.statusCliente )

    

    return (
        <div>
            {'new' == 'new' && (
                <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">
                    CADASTRAR CLIENTE</h4>
            )}
            {props.statusCliente == 'edit' && (
                <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">
                    EDITAR CLIENTE</h4>
            )}



            <div className='col-12 border rounded'>
                <div>
                    <div id="accordion">
                        <div className="d-flex justify-content-end"
                            style={{ marginTop: '6px' }}
                            id="headingTwo">
                            <button className="btn btn-outline-secondary"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <i className="fas fa-angle-down"></i>
                            </button>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <hr />
                            <form>
                                <small className="text-muted font-weight-bold">
                                    <p className="text-dark text-center">
                                        <i className="far fa-address-card" style={{ marginRight: '8px' }}></i>
                                        INFORMAÇÕES PESSOAIS DO CLIENTE</p>
                                </small>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>

                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>

                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                </div>

                                <hr />
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default ClienteForm