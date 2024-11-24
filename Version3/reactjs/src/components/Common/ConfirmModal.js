/*import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "../../utilities/constant";


const ConfirmModal = (props) => {
    const {title, content, show, onAction} = props;

    return (
        <>
            <Modal show={show} onHide={() => onAction(MODAL_ACTION_CLOSE)} backdrop={'static'}>
                <Modal.Header closeButton>
                    <Modal.Title> {title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {parse(content)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ConfirmModal;*/

import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "../../utilities/constant";

const ConfirmModal = ({ title, content, show, onAction }) => {
    return (
        <Modal show={show} onHide={() => onAction(MODAL_ACTION_CLOSE)} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{parse(content)}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

ConfirmModal.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onAction: PropTypes.func.isRequired,
};

export default ConfirmModal;
