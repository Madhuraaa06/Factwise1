// ConfirmationModal.js
import React from "react";
import './acc.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure you want to delete this profile?</h2>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          
          <button className="del" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
