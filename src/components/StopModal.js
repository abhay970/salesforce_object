import { useState } from "react";
import "./StopModal.css";

const StopModal = ({
  toggleOpenStopModal,
  setRunning,
  running,
  timer,
  time,
  format,
}) => {
  
  const [text, setText] = useState("");
  const handleSave = () => {
    let ts = time * 1000;
    console.log(format(time), "save", ts, text);
    setText("");
    toggleOpenStopModal();
  };
  const handleCancel = () => {
    console.log("cancel");
    setRunning(true);
    setText("");
    toggleOpenStopModal();
  };
  return (
    <div className="stopModal">
      <p className="start">STOP</p>
      <div className="hr"></div>
      <p className="stop-type">STOP Notes</p>
      <form>
        <textarea
          id="stopnote"
          name="stopnote"
          rows="5"
          cols="33"
          className="textarea"
          placeholder="Notes"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </form>
      <div className="hr"></div>
      <div className="btn-box">
        <button className="btn-cancel" onClick={() => handleCancel()}>
          Cancel
        </button>
        <button className="btn-save" onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default StopModal;