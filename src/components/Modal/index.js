import React from 'react';
import styles from './styles.module.css';

export default function Modal({ isOpen, onClose, children, title }) {
  return (
    <dialog 
      className={styles.modal} 
      open={isOpen}
      onClick={(e) => {
        if (e.target.tagName === 'DIALOG') {
          onClose();
        }
      }}
    >
      <div className={styles.modalContent}>
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </dialog>
  );
}