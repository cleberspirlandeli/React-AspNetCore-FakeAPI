import React from 'react'
import './cliente.css'
import Button from './../template/Button'

export default props => {
    const errors = {}

    return (
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
                                    <i className="fas fa-search" style={{ marginRight: '8px' }}></i>
                                    FILTROS PARA PESQUISAR DE CLIENTE</p>
                            </small>
                            <div className="row">
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                    {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}

                                </div>
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="telefone" name="telefone" value={props.telefone} onChange={props.handleChange} type="text" className="form-control" placeholder="Telefone" />
                                    {errors.telefone ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                </div>
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="cpf" name="cpf" value={props.cpf} onChange={props.handleChange} type="text" className="form-control" placeholder="CPF" />
                                    {errors.cidade ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="cep" name="cep" value={props.cep} onChange={props.handleChange} type="text" className="form-control" placeholder="CEP" />
                                    {errors.cep ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                </div>
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="rua" name="rua" value={props.rua} onChange={props.handleChange} type="text" className="form-control" placeholder="Rua" />
                                    {errors.rua ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}

                                </div>
                                <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                    <input id="bairro" name="bairro" value={props.bairro} onChange={props.handleChange} type="text" className="form-control" placeholder="Bairro" />
                                    {errors.bairro ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button
                                    classBtn='btn-primary'
                                    classIcon='fas fa-user-plus'
                                    nomeBtn='Novo Cliente'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}