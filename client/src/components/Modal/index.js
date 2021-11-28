import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ModalTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 300;
`;

export default function Index({ open, onclose, title, children }) {
  return (
    <>
      <Modal
        size="lg"
        show={open}
        onHide={() => onclose()}
        aria-labelledby="modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-sizes-title-lg">
            <ModalTitle>{title}</ModalTitle>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
