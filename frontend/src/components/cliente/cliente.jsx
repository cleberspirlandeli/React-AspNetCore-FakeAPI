import React, { Component } from 'react'
import axios from 'axios'
import ClienteList from './clienteList'
import ClienteFilter from './clienteFilter'
import ClienteForm from './clienteForm'


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
            nome: '',
            telefone: '',
            cpf: '',
            cep: '',
            rua: '',
            bairro: '',
            idPrepareToDelete: null,
            clientes: [],

            testeState: 1
        }

        this.getClientes = this.getClientes.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClickEditClient = this.handleClickEditClient.bind(this)
        this.handleClickConfirmRemove = this.handleClickConfirmRemove.bind(this)
        this.handleClickPrepareToDelete = this.handleClickPrepareToDelete.bind(this)
        this.handleClickOpenForm = this.handleClickOpenForm.bind(this)

    }

    componentDidMount() {
        this.getClientes()
        this.handleClickOpenForm(false, 'new')
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // console.log(value, name)
        this.setState({
            [name]: value
        }, () => {
            this.getClientes()
        });
    }

    getClientes() {
        let query = ''

        if (this.state.nome != '') {
            query = `/search?nome=${this.state.nome.replace(/\s/g, '%20')}`
        }

        if (this.state.telefone != '') {
            if (query == '')
                query = `/search?telefone=${this.state.telefone.replace(/\s/g, '%20')}`
            else
                query += `&telefone=${this.state.telefone.replace(/\s/g, '%20')}`
        }

        if (this.state.cpf != '') {
            if (query == '')
                query = `/search?cpf=${this.state.cpf.replace(/\s/g, '%20')}`
            else
                query += `&cpf=${this.state.cpf.replace(/\s/g, '%20')}`
        }

        if (this.state.cep != '') {
            if (query == '')
                query = `/search?cep=${this.state.cep.replace(/\s/g, '%20')}`
            else
                query += `&cep=${this.state.cep.replace(/\s/g, '%20')}`
        }

        if (this.state.rua != '') {
            if (query == '')
                query = `/search?rua=${this.state.rua.replace(/\s/g, '%20')}`
            else
                query += `&rua=${this.state.rua.replace(/\s/g, '%20')}`
        }

        if (this.state.bairro != '') {
            if (query == '')
                query = `/search?bairro=${this.state.bairro.replace(/\s/g, '%20')}`
            else
                query += `&bairro=${this.state.bairro.replace(/\s/g, '%20')}`
        }

        // console.log(`${URL + query}`)
        if (desenv && query != '') query = 'id/'

        axios.get(`${URL + query}`)
            .then(res => {
                this.setState({ ...this.state, clientes: res.data })
                // console.log(res.data)
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
                statusCliente: this.status
            }, () => {
                this.props.history.push('/clientes/cadastrar')
            })
        }
         else {
            this.setState({ 
                openForm: false, 
                statusCliente: 'new' 
            }, () => {
                this.props.history.push('/clientes')
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
                    <ClienteForm
                        toRegister={this.state.openForm}
                        cliente={this.state.clientes}
                        statusCliente={this.statusCliente}

                    />
                );
                break;
            default:
                return (
                    <div>
                        <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">CLIENTES</h4>
                        <ClienteFilter
                            nome={this.state.nome}
                            telefone={this.state.telefone}
                            cpf={this.state.cpf}
                            cep={this.state.cep}
                            rua={this.state.rua}
                            bairro={this.state.bairro}
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