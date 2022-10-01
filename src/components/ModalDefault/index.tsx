import React from "react";
import { Container } from "./styles";
import Modal from "react-modal";

interface ModalDefaultProps {
  //adicionar os props
  isOpen: boolean;
  children?: React.ReactNode;
}

export const ModalDefault: React.FC<ModalDefaultProps> = (props) => {
  const close = () =>{
    props.isOpen = false;
  }
  return (
    <Container>
      <Modal
        isOpen={props.isOpen}
        shouldCloseOnEsc={true}
        preventScroll={false}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        appElement={document.getElementById("root") || undefined}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(78, 76, 76, 0.75)",
          },
          content: {
            border: "1px solid #ccc",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        onRequestClose={close}
      
        closeTimeoutMS={800}
      >
        {props.children}
      </Modal>
    </Container>
  );
};
