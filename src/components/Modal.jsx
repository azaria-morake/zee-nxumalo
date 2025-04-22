// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; // Highest layer
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 8px;
`;

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root') // You need to add this to your HTML
  );
};

export default Modal;
