import React, { Component } from 'react'
import axios from 'axios'

const desenv = true

export default class Cliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            pedidos: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // console.log(value, name)
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h4 style={{ marginTop: '10px', padding: '8px' }} className="text-center border rounded">PEDIDOS</h4>
            </div>
        )
    }

}