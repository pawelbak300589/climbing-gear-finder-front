import React from 'react';
import ReactDOM from "react-dom";

import './modal.styles.scss';
import { default as BootstrapModal } from "react-bootstrap/Modal";

const Modal = ({ onDismiss, title, content, actions, ...otherProps }) => {
    return ReactDOM.createPortal(
        <BootstrapModal show backdrop="static" onHide={onDismiss} {...otherProps}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>{title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>{content}</BootstrapModal.Body>
            <BootstrapModal.Footer>
                {actions}
            </BootstrapModal.Footer>
        </BootstrapModal>,
        document.querySelector('#modal')
    );
};

export default Modal;
