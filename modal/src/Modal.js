import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  // @ts-ignore
  const { modalIsOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${modalIsOpen && 'show-modal'}`}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
