import React from 'react';
import ReactDOM from "react-dom";

import './modal.styles.scss';

const Modal = ({ onDismiss, title, content, actions }) => {
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal-body">
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">
                    {actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
