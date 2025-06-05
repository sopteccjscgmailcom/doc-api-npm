// src/components/Modal.js
import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ children, buttonText = "Abrir Modal" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="modal-button" onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;