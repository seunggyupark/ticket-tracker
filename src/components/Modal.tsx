import React from 'react';
import './Modal.scss'

interface ModalProps {
    show: boolean;
    removeModal: () => void;
}

const Modal: React.FC<ModalProps> = props => {
    return (
        <div className={`Modal ${props.show && 'show'}`}>
            <p>Thanks for submitting a ticket! If you need immediate assistance, please contact a representative at<br/>1-800-123-4567.</p>
            <button onClick={props.removeModal}>Create Another Ticket</button>
        </div>
    );
}

export default Modal;