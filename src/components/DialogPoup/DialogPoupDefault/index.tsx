import React, { useContext, useState } from "react";
import { Container } from "./styles";
import Modal from "react-modal";
import { ThemeContext } from "styled-components";
import { TiWarningOutline } from "react-icons/ti";
import { ButtonBase } from "../../Buttons/ButtonBase";

interface DialogPoupDefaultProps {
  //adicionar os props
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose?: Function;
  title: "Aviso" | "Confirme";
  onClickSim:() => void;
  onClickNao:() => void;
}

export const DialogPoupDefault: React.FC<DialogPoupDefaultProps> = (props) => {
  const [isOpen, setIsOpen] = useState();
  const close = () => {
    props.isOpen = false;
  };
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <Modal
        isOpen={props.isOpen}
        shouldCloseOnEsc={true}
        preventScroll={
          false
          /* Boolean indicating if the modal should use the preventScroll flag when
     restoring focus to the element that had focus prior to its display. */
        }
        shouldCloseOnOverlayClick={
          true
          /* Boolean indicating if the overlay should close the modal */
        }
        ariaHideApp={
          true
          /* Boolean indicating if the appElement should be hidden */
        }
        appElement={document.getElementById("root") || undefined}
        style={
          {
            overlay: {
              backgroundColor: "rgba(78, 76, 76, 0.75)",
            },
            content: {
              width: "40vw",
              height: "30vh",
              left: "30vw",
              top: "30vh",
              border: "1px solid #ccc",
              padding: 0,
            },
          }
          /* Object indicating styles to be used for the modal.
             It has two keys, `overlay` and `content`.
             See the `Styles` section for more details. */
        }
        closeTimeoutMS={
          800
          /* Number indicating the milliseconds to wait before closing
               the modal. */
        }
        contentElement={(props, children) => <div {...props}>{children}</div>}
        onRequestClose={() => props.onRequestClose}
      >
        <div>
          <TiWarningOutline />
        </div>
        <div
          className="p-2 flex justify-between"
          style={{
            background: colors.primary,
            position: "fixed",
            top: "30vh",
            left: "30vw",
            width: "40vw",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <label
            htmlFor=""
            className="font-bold"
            style={{ color: colors.info }}
          >
            {props.title}
          </label>
          {/* <GrFormClose style={{cursor:'pointer'}}/> */}
        </div>
        <div className="w-full p-4" style={{ marginTop: "20px" }}>
          <div className="w-full p-4 text-center">{props.children}</div>
          <div className="w-full p-2 flex justify-center items-center">
            <ButtonBase
              label="Sim"
              model="btn_base"
              className="primary-color mr-5 p-2"
              size="large"
              onClick={props.onClickSim}
            />
            <ButtonBase
              label="Não"
              model="btn_base"
              className="red-color p-2 ml-5"
              size="large"
              style={{ marginLeft: "50px" }}
              onClick={props.onClickNao}
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
};
