import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MdLocalCafe } from "react-icons/md";

export const ModalScreen = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button
        color="warning"
        size="lg"
        active
        onClick={toggle}
        style={{ marginTop: "20px" }}
      >
        {buttonLabel} Beneficios
        <MdLocalCafe
          spin
          style={{
            color: "black",
            fontSize: "2rem",
            marginRight: "10px",
          }}
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{ backgroundColor: "grey" }}>
          <h2
            style={{
              textAlign: "justify",
              textShadow: "2px 2px 5px red",
            }}
          >
            La manera más sencilla y confiable de ofrecer variedades de café
          </h2>
        </ModalHeader>
        <ModalBody style={{ backgroundColor: "grey" }}>
          <ul>
            <li>
              <h5>Variedades de bebidas.</h5>
            </li>

            <li>
              <h5>Simplicidad y rapidez.</h5>
            </li>
            <li>
              <h5>Estandarizacion.</h5>
            </li>
            <li>
              <h5>Control de costos.</h5>
            </li>
            <li>
              <h5>Mantenimiento preventivo y correctivo.</h5>
            </li>
          </ul>
        </ModalBody>
      </Modal>
    </>
  );
};
