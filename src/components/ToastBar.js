import React from "react";
import "./ToastMessage.css";
const ToastBar = (props) => {
  return (
    <div
      className="ToastBox"
      style={{ backgroundColor: props.type === "success" ? "#1f9f1f" : "red" }}
    >
      <div className="message">{props.message}</div>
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
    </div>
  );
};

export default ToastBar;
