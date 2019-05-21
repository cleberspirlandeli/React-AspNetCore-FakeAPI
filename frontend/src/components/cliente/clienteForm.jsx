import React from 'react'
import Button from './../template/Button'
import Modal from './../template/Modal'

import { Link } from 'react-router-dom'

import './cliente.css'

const ClienteForm = (props) => {

    let client = props.cliente || []
    const errors = {nome:'teste'}

    //  ajustar variavel statusCliente new = new

    return (
        <div>

            <Modal
                // Modal Information
                iconModal="fas fa-exclamation-triangle"
                txtCabecalho="Atenção"
                txtInformativo="Deseja salvar permanentemente este cliente?"
                txtExplicativo="O cliente será salvo com as informções informadas nos campos acima. Com isso você pode consulta-lo sempre que desejar."
                // Button Cancel Information
                btnClassCancel=""
                btnIconCancel="far fa-times-circle"
                btnNameCancel="Cancelar"
                dataToggleBtnCancel="modal"
                dataTargetBtnCancel="#modalConfirmDeleteClient"
                onClickBtnCancel=""
                // Button Confirm Information
                btnClassConfirm="btn-success"
                btnIconConfirm="fas fa-check"
                btnNameConfirm="Salvar"
                dataToggleBtnConfirm="modal"
                dataTargetBtnConfirm="#modalConfirmDeleteClient"
                onClickBtnConfirm={() => { }}
            />

            {'new' == 'new' && (
                <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">
                    CADASTRAR CLIENTE</h4>
            )}
            {props.statusCliente == 'edit' && (
                <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">
                    EDITAR CLIENTE</h4>
            )}

            {props.isLoading > 0 && (
                <div className="progress">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: props.valueLoading }}></div>
                </div>
            )}
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className="mb-0"
                            data-toggle="collapse"
                            data-target="#collapseDadosPessoaisCliente"
                            aria-expanded="false"
                            aria-controls="collapseDadosPessoaisCliente"
                            style={{ cursor: 'pointer' }}>

                            <div className="d-flex justify-content-start">
                                <p className="font-weight-bold" style={{ fontSize: '14px', marginTop: '5px' }}>
                                    {('new' == 'new')
                                        ? <i className="fas fa-user" style={{ marginRight: '17px', fontSize: '17px' }}></i>
                                        : <i className="fas fa-pencil-alt" style={{ marginRight: '17px', fontSize: '17px' }}></i>
                                    }
                                    DADOS PESSOAIS DO CLIENTE
                                </p>
                            </div>
                            <div className="d-flex justify-content-end" style={{ marginTop: '-45px', marginBottom: '-1%' }}>
                                <button className="btn btn-outline-secondary"
                                    data-toggle="collapse"
                                    data-target="#collapseDadosPessoaisCliente"
                                    aria-expanded="false"
                                    aria-controls="collapseDadosPessoaisCliente">
                                    <i className="fas fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* DADOS PESSOAIS DO CLIENTE */}
                    <div id="collapseDadosPessoaisCliente" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="nome" name="nome" value={props.nome} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="telefone" name="telefone" value={props.telefone} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Telefone" />
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                onChange={(e) => props.handleChange(e, 'clienteForm')}
                                                id="whatsapp"
                                                name="whatsapp"
                                                type="checkbox"
                                                className="custom-control-input"
                                            />
                                            <label className="custom-control-label" for="whatsapp">
                                                <i className="fab fa-whatsapp"></i> WhatsApp
                                            </label>
                                        </div>
                                        {errors.telefone ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="cpf" name="cpf" value={props.cpf} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="CPF" />
                                        {errors.cpf ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="email" name="email" value={props.email} onChange={(e) => props.handleChange(e, 'clienteForm')} type="email" className="form-control" placeholder="E-mail" />
                                        {errors.email ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>

                                    <div id="sexo" className="form-group col-12 col-sm-4">
                                        <select
                                            onChange={(e) => props.handleChange(e, 'clienteForm')}
                                            name="sexo"
                                            className="form-control"
                                            id="exampleFormControlSelect1">
                                            <option>Sexo</option>
                                            <option>Masculino</option>
                                            <option>Feminino</option>
                                        </select>
                                    </div>
                                    <div id="dataNascinento" className="form-group col-12 col-sm-4 mobile">
                                        <small>Data de Nascimento</small>
                                        <input
                                            onChange={(e) => props.handleChange(e, 'clienteForm')}
                                            name="dataNascinento"
                                            type="date"
                                            name="data-nascinento"
                                            min="1900-01-01"
                                            max="2100-12-31"
                                            className="form-control" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>



                    {/* ENDEREÇO CLIENTE */}
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <div className="mb-0"
                                data-toggle="collapse"
                                data-target="#collapseAdress"
                                aria-expanded="true"
                                aria-controls="collapseAdress"
                                style={{ cursor: 'pointer' }}>

                                <div className="d-flex justify-content-start">
                                    <p className="font-weight-bold" style={{ fontSize: '14px', marginTop: '5px' }}>
                                        <i className="far fa-address-card" style={{ marginRight: '15px', fontSize: '25px' }}></i>
                                        ENDEREÇO DO CLIENTE
                                </p>
                                </div>
                                <div className="d-flex justify-content-end" style={{ marginTop: '-45px', marginBottom: '-1%' }}>
                                    <button className="btn btn-outline-secondary"
                                        data-toggle="collapse"
                                        data-target="#collapseAdress"
                                        aria-expanded="true"
                                        aria-controls="collapseAdress">
                                        <i className="fas fa-angle-down"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="collapseAdress" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="cep" name="cep" value={props.cep} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="CEP" />
                                            {errors.cep ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="rua" name="rua" value={props.rua} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Rua" />
                                            {errors.rua ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="numero" name="numero" value={props.numero} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Número" />
                                            {errors.numero ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="bairro" name="bairro" value={props.bairro} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Bairro" />
                                            {errors.bairro ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="cidade" name="cidade" value={props.cidade} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Cidade" />
                                            {errors.cidade ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                        <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                            <input id="complemento" name="complemento" value={props.complemento} onChange={(e) => props.handleChange(e, 'clienteForm')} type="text" className="form-control" placeholder="Complemento" />
                                            {errors.complemento ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-end" style={{ marginTop: '10px' }}>
                <Button
                    classBtn='btn-light'
                    classIcon='far fa-times-circle'
                    nomeBtn='Cancelar'
                    onClick={() => { }} />
                {'new' == 'new'
                    ?
                    <Button
                        classBtn='btn-success'
                        classIcon='fas fa-check'
                        nomeBtn='Salvar'
                        onClick={() => { }}
                        dataToggle="modal"
                        dataTarget="#modalConfirmDeleteClient"
                    />
                    :
                    <Button
                        classBtn='disabled'
                        classIcon='fas fa-check'
                        nomeBtn='Salvar'
                        onClick={() => { }}
                        dataToggle=""
                        dataTarget=""
                    />
                }
            </div>
        </div >
    )
}

export default ClienteForm