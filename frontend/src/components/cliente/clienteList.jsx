import React from 'react'
import './cliente.css'
import Button from './../template/Button'
import Modal from './../template/Modal'

export default props => {

    const renderTableClientes = () => {
        const clientes = props.clientes || []

        if (Object.keys(clientes).length === 0) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Falha ao conectar com o servidor! </strong> <br />
                        Atualize a página ou tente novamente mais tarde.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
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
                        {clientes.map(cliente => (
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
                                        onClick={() => props.handleClickEditClient(cliente.id)} />

                                    <Button
                                        classBtn='btn-danger'
                                        classIcon='far fa-trash-alt'
                                        nomeBtn='Remover'
                                        onClick={() => props.handleClickPrepareToDelete(cliente.id)}
                                        dataToggle="modal"
                                        dataTarget="#modalConfirmDeleteClient"
                                    />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }

    return (

        <div>
            <Modal
                // Modal Information
                iconModal="fas fa-exclamation-triangle"
                txtCabecalho="Atenção"
                txtInformativo="Deseja remover permanentemente este cliente?"
                txtExplicativo="O cliente será deletado definitivamente. É uma ida sem volta, você perderá para sempre essa informação."
                // Button Cancel Information
                btnClassCancel=""
                btnIconCancel="far fa-times-circle"
                btnNameCancel="Cancelar"
                dataToggleBtnCancel="modal"
                dataTargetBtnCancel="#modalConfirmDeleteClient"
                onClickBtnCancel=""
                // Button Confirm Information
                btnClassConfirm="btn-danger"
                btnIconConfirm="far fa-trash-alt"
                btnNameConfirm="Remover"
                dataToggleBtnConfirm="modal"
                dataTargetBtnConfirm="#modalConfirmDeleteClient"
                onClickBtnConfirm={() => props.handleClickConfirmRemove()}
            />

            {renderTableClientes()}

        </div >
    )
}