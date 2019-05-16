import React from 'react'
import Button from './../template/Button'
import Modal from './../template/Modal'

import { Link } from 'react-router-dom'


const ClienteForm = (props) => {

    let client = props.cliente || []
    const errors = {nome: 'teste'}

    console.log('Cliente Form')

    console.log(client)
    console.log('statusCliente -> ' + props.statusCliente)

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
                                        <input id="nome" name="nome" value={props.nome} onChange={props.handleChange} type="text" className="form-control" aria-describedby="nome" placeholder="Nome" />
                                        {errors.nome ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="telefone" name="telefone" value={props.telefone} onChange={props.handleChange} type="text" className="form-control" placeholder="Telefone" />
                                        {errors.telefone ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="cpf" name="cpf" value={props.cpf} onChange={props.handleChange} type="text" className="form-control" placeholder="CPF" />
                                        {errors.cpf ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>
                                    <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                        <input id="cpf" name="cpf" value={props.cpf} onChange={props.handleChange} type="text" className="form-control" placeholder="CPF" />
                                        {errors.cpf ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                    </div>

                                    <div className="form-group col-12 col-sm-4">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Sexo</option>
                                            <option>Masculino</option>
                                            <option>Feminino</option>
                                        </select>
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
                                <div className="row">
                                    <form>
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
                                                <input id="numero" name="numero" value={props.numero} onChange={props.handleChange} type="text" className="form-control" placeholder="Número" />
                                                {errors.numero ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                            </div>
                                            <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                                <input id="bairro" name="bairro" value={props.bairro} onChange={props.handleChange} type="text" className="form-control" placeholder="Bairro" />
                                                {errors.bairro ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                            </div>
                                            <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                                <input id="cidade" name="cidade" value={props.cidade} onChange={props.handleChange} type="text" className="form-control" placeholder="Cidade" />
                                                {errors.cidade ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                            </div>
                                            <div className="form-group col-12 col-sm-4" style={{ marginTop: '5px' }}>
                                                <input id="complemento" name="complemento" value={props.complemento} onChange={props.handleChange} type="text" className="form-control" placeholder="Complemento" />
                                                {errors.complemento ? <small className="form-text text-muted"><p className=" text-danger">Aqui vai uma mensagem de erro</p></small> : ''}
                                            </div>
                                        </div>
                                    </form>
                                </div>
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