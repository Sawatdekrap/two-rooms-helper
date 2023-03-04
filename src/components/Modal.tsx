import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  :hover {
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  max-width: 90vw;
  max-height: 100vh;
  overflow: scroll;
`;

interface ModalProps {
  active: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root");

const Modal = ({ active, closeModal, children }: ModalProps) => {
  if (!active) return null;

  return createPortal(
    <ModalBackdrop onClick={closeModal}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot as HTMLElement
  );
};

export default Modal;
