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
  //background: white;
  padding: 2rem;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 8px;
  
  background: linear-gradient( rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 5)),
              url('/store/backgrounds/img-10.jpg');
  background-size: cover;



          /* noise/texture */
          &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.1;
      pointer-events: none;
    }
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
