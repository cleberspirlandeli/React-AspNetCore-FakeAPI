import React from 'react'
import './cliente.css'
import Button from './../template/Button'

export default props => {

    const renderRows = () => {
        const clientes = props.clientes || []

        return clientes.map(cliente => (
            <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.sexo == 'M' ? 'Masculino' : 'Feminino'}</td>
                <td>{cliente.dataNascimento}</td>
                <td>
                    <div className="form-check">
                        <input checked={cliente.whatsapp ? 'checked' : ''}
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">WhatsApp</label>
                    </div>
                    <div className="form-check">
                        <input checked={cliente.email ? 'checked' : ''}
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck2"
                        />
                        <label className="form-check-label" for="exampleCheck2">E-mail</label>
                    </div>

                </td>
                <td>
                    <Button
                        classBtn='btn-light'
                        classIcon='fas fa-pencil-alt'
                        nomeBtn='Editar'
                        onClick={() => props.handleClickEdit(cliente.id)}>
                    </Button>

                    <Button
                        classBtn='btn-danger'
                        classIcon='far fa-trash-alt'
                        nomeBtn='Remover'
                        onClick={() => props.handleClickRemove(cliente.id)}/>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className='table-responsive-sm table-responsive-md col-12 table border rounded'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Data Nascimento</th>
                        <th>Informações</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}