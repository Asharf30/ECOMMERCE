import React from "react";
// متنساش تعمل امبورت لملف الـ CSS اللي فيه تنسيق المودال هنا
// import './ConfirmModal.css';

function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  // لو الـ isOpen بـ false، مش هيرجع حاجة (هيختفي)
  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal_box">
        <h3>Clear cart items?</h3>
        <p>
          You won't be able to undo this. All items will be removed from your
          cart.
        </p>

        <div className="modal_actions">
          <button className="confirm_btn" onClick={onConfirm}>
            Clear all
          </button>
          <button className="cancel_btn" onClick={onCancel}>
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
