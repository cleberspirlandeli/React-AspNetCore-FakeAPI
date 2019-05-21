import React, { Component } from 'react'
import axios from 'axios'
import ClienteList from './clienteList'
import ClienteFilter from './clienteFilter'
import ClienteForm from './clienteForm'
import './cliente.css'

const URL = 'http://localhost:3001/clientes'
// const URL = 'http://localhost:3001/clientesid/'
// http://localhost:3001/clientes//search?nome=Cleber%20Rezende&telefone=9999&cpf=123&cep=14050-100&rua=Rua%20Aurora&bairro=tiberio

const desenv = true

export default class Cliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openForm: false,
            statusCliente: 'new',
            isLoading: 0,
            idPrepareToDelete: null,

            clientes: [],
            clienteFilter: {
                nome: '',
                telefone: '',
                cpf: '',
                cep: '',
                rua: '',
                bairro: '',
            },
            clienteForm: {
                nome: '',
                telefone: '',
                whatsApp: '',
                cpf: '',
                email: '',
                sexo: '',
                dataNascimento: '',
                cep: '',
                rua: '',
                numero: '',
                bairro: '',
                cidade: '',
                complemento: '',
            }
        }

        this.getClientes = this.getClientes.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClickEditClient = this.handleClickEditClient.bind(this)
        this.handleClickConfirmRemove = this.handleClickConfirmRemove.bind(this)
        this.handleClickPrepareToDelete = this.handleClickPrepareToDelete.bind(this)
        this.handleClickOpenForm = this.handleClickOpenForm.bind(this)
        this.getCep = this.getCep.bind(this)
    }

    componentDidMount() {
        this.getClientes()
        this.handleClickOpenForm(false, 'new')
    }

    handleChange(event, nameOfObj) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(value, name)

        //creating copy of object - clienteForm clienteFilter
        let objCliente = nameOfObj === 'clienteFilter'
            ? Object.assign({}, this.state.clienteFilter)
            : Object.assign({}, this.state.clienteForm)

        //updating value
        objCliente[name] = value

        // console.log(clienteFilter[name])
        if (nameOfObj === 'clienteFilter') {
            this.setState({ clienteFilter: objCliente }, () => {
                this.getClientes()
            });
        } else {
            this.setState({ clienteForm: objCliente }, () => {
                if (name === 'cep' && value.length >= 8) {
                    this.getCep(value)
                }
            });
        }
    }

    getCep(cep) {
        this.setState({ isLoading: 100 })
        cep = cep.replace('-', '')

        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                this.setState({
                    clienteForm: {
                        cep: res.data.cep,
                        bairro: res.data.bairro,
                        rua: res.data.logradouro,
                        cidade: res.data.localidade
                    }
                }, () => {
                    this.setState({ isLoading: 0 })
                })

            }).catch(err => {
                console.log('ERR Buscar CEP - ' + err)
            })
    }

    getClientes() {
        let clienteFilter = this.state.clienteFilter
        let query = ''

        if (clienteFilter.nome != '') {
            query = `/search?nome=${clienteFilter.nome.replace(/\s/g, '%20')}`
        }

        if (clienteFilter.telefone != '') {
            if (query == '')
                query = `/search?telefone=${clienteFilter.telefone.replace(/\s/g, '%20')}`
            else
                query += `&telefone=${clienteFilter.telefone.replace(/\s/g, '%20')}`
        }

        if (clienteFilter.cpf != '') {
            if (query == '')
                query = `/search?cpf=${clienteFilter.cpf.replace(/\s/g, '%20')}`
            else
                query += `&cpf=${clienteFilter.cpf.replace(/\s/g, '%20')}`
        }

        if (clienteFilter.cep != '') {
            if (query == '')
                query = `/search?cep=${clienteFilter.cep.replace(/\s/g, '%20')}`
            else
                query += `&cep=${clienteFilter.cep.replace(/\s/g, '%20')}`
        }

        if (clienteFilter.rua != '') {
            if (query == '')
                query = `/search?rua=${clienteFilter.rua.replace(/\s/g, '%20')}`
            else
                query += `&rua=${clienteFilter.rua.replace(/\s/g, '%20')}`
        }

        if (clienteFilter.bairro != '') {
            if (query == '')
                query = `/search?bairro=${clienteFilter.bairro.replace(/\s/g, '%20')}`
            else
                query += `&bairro=${clienteFilter.bairro.replace(/\s/g, '%20')}`
        }

        // console.log(`${URL + query}`)
        if (desenv && query != '') query = 'id/'

        axios.get(`${URL + query}`)
            .then(res => {
                this.setState({ ...this.state, clientes: res.data })
                // console.log(res.data)
                console.log('chamou axios')
            })
    }

    handleClickPrepareToDelete(idClient) {
        this.setState({ ...this.state, idPrepareToDelete: idClient })
    }
    handleClickConfirmRemove() {
        console.log('btn remove - id: ' + this.state.idPrepareToDelete)
    }

    handleClickOpenForm(open, status) {
        console.log(status)

        if (open) {
            this.setState({
                openForm: true,
                statusCliente: status
            }, () => {
                this.props.history.push('/clientes/cadastrar')
            })
        }
        else {
            this.setState({
                openForm: false,
                statusCliente: 'new'
            }, () => {
                this.props.history.push('/clientes/listar')
            })
        }
    }

    handleClickEditClient(id) {
        let query = `id/`

        axios.get(`${URL + query}`)
            .then(res => {
                this.setState({ clientes: res.data }, () => {
                    this.handleClickOpenForm(true, 'edit')
                })
            })
    }

    render() {

        switch (this.state.openForm) {
            case true:
                return (
                    <div>
                        <ClienteForm
                            {...this.state.clienteForm}
                            isLoading={this.state.isLoading}
                            statusCliente={this.state.statusCliente}
                            // Functions
                            handleChange={this.handleChange}
                            toRegister={this.state.openForm}
                            cliente={this.state.clientes}
                            statusCliente={this.statusCliente}

                        />
                    </div>
                );
                break;
            default:
                return (
                    <div>
                        <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">CLIENTES</h4>
                        <ClienteFilter
                            {...this.state.clienteFilter}
                            // Functions
                            handleChange={this.handleChange}
                            getClientes={this.getClientes}
                            handleClickOpenForm={this.handleClickOpenForm}
                        />

                        <ClienteList
                            // Functions
                            clientes={this.state.clientes}
                            handleClickEditClient={this.handleClickEditClient}
                            handleClickPrepareToDelete={this.handleClickPrepareToDelete}
                            handleClickConfirmRemove={this.handleClickConfirmRemove}
                        />
                    </div>
                )
                break;
        }

    }

}