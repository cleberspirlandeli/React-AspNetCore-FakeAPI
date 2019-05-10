import React from 'react'
import Button from './../template/Button'

const Modal = (props) => (
    <div>
        <div className="modal fade" id="modalConfirmDeleteClient" tabindex="-1" role="dialog" aria-labelledby="modalConfirmDeleteClientTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-uppercase text-center" id="exampleModalLongTitle">
                            <i className={props.iconModal} style={{marginRight:'15px'}}> </i>
                            {props.txtCabecalho}
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <strong>{props.txtInformativo}</strong>
                        <hr />
                        <p className="">{props.txtExplicativo}</p>
                    </div>
                    <div className="modal-footer">
                        <Button
                            classBtn={props.btnClassCancel}
                            classIcon={props.btnIconCancel}
                            nomeBtn={props.btnNameCancel}
                            onClick={() => props.onClickBtnCancel}
                            dataDismiss="modal"
                            dataToggle={props.dataToggleBtnCancel}
                            dataTarget={props.dataTargetBtnCancel}
                        />

                        <Button
                            classBtn={props.btnClassConfirm}
                            classIcon={props.btnIconConfirm}
                            nomeBtn={props.btnNameConfirm}
                            onClick={() => props.onClickBtnConfirm()}
                            dataToggle={props.dataToggleBtnConfirm}
                            dataTarget={props.dataTargetBtnConfirm}
                        />

                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Modal