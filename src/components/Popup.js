import React, { useContext } from "react";
import FormContext from "../context/FromContext";

const Popup = () => {
  const { formValues, closePopup } = useContext(FormContext);
  return (
    <div className="Popup">
      <div className="popup-msg">
        <h4 className="close" onClick={closePopup}>
          X
        </h4>
        <h1>Hello {formValues.firstname},</h1>
        <h3>You are successfully signed in</h3>
      </div>
    </div>
  );
};

export default Popup;
