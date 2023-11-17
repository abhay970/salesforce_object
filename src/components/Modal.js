import React, { useState } from "react";
import Development from "./Development";

const Modal = () => {
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
      {/* {openModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h1>Hello modal</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora in expedita sint beatae repellendus! Pariatur odio enim
                velit consectetur a autem quaerat, aperiam excepturi officiis
                aspernatur iste perspiciatis qui similique dignissimos quasi
                tenetur cum. Illum exercitationem eaque nihil sunt provident hic
                voluptatum cupiditate natus! Mollitia harum non aut veritatis
                ut.
              </p>
              <button className="close-modal" onClick={toggleOpenModal}>
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Modal;
