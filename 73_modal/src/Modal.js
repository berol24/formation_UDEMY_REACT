import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  const popUpContainer = document.createElement("div");

  document.body.appendChild(popUpContainer);

  if (props.close) {
    document.body.removeChild(popUpContainer);
  }
  return createPortal(
    <div className="modal" onClick={props.close}>
      <div>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <button>Fermer</button>
      </div>
    </div>,
    popUpContainer
  );
}

export default Modal;
