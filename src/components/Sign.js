import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Signature from "./Signature";
import "../style/Sign.css";

const Sign = ({ isModalOpen, openModal, closeModal }) => {
  const [signature, setSignature] = useState("");

  useEffect(() => {
    Modal.setAppElement("#root"); 
  }, []);
  
  const handleDoneClick = (content) => {
    setSignature(content);
    closeModal();
  };

  return (
    <div className="main-container">
      <div aria-placeholder="Sign" onClick={openModal} className="text-area">
        {signature.startsWith("data:image") ? (
          <img src={signature} alt="Signature" />
        ) : (
          <span>{signature}</span>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}  
        onRequestClose={closeModal}
        className="container"

      >
        <Signature closeModal={closeModal} onDoneClick={handleDoneClick} />
      </Modal>
    </div>
  );
};

export default Sign;
