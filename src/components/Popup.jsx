import React, { useState } from "react";
import Development from "./Development";

const Popup = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button className="btn-modal" onClick={() => toggleOpenModal()}>
        Open Modal
      </button>
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            <Development toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;