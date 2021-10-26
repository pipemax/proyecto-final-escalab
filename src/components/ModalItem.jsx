import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ItemDetails from './ItemDetails';
import propTypes from "prop-types";

const ModalItem = ({ modal, handleCloseModal, idTitle, fullTitle }) => {
    return (
        <Modal show={ modal } onHide= {handleCloseModal} fullscreen= {true}>
            <Modal.Header closeButton>
                <Modal.Title>
                    { fullTitle }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>                            
                <ItemDetails 
                    idTitle = { idTitle }
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleCloseModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>    
    )
}

ModalItem.propTypes = {
    modal: propTypes.bool,
    handleCloseModal: propTypes.object,
    idTitle: propTypes.string,
    fullTitle: propTypes.string
};

export default ModalItem;
