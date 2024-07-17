import { useState } from "react";
import "./modal.css";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          body={<div>Customized body</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
