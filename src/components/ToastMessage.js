import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./ToastMessage.css";

const ToastMessage = forwardRef((props, ref) => {
  const [showToastMsg, setShowToastMsg] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      setShowToastMsg(true);
      setTimeout(() => {
        setShowToastMsg(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="ToastBox"
      id={showToastMsg ? "show" : "hide"}
      style={{ backgroundColor: props.type === "success" ? "#1f9f1f" : "red" }}
    >
      <div className="message">{props.message}</div>
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
    </div>
  );
});

export default ToastMessage;
