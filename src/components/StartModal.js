import { useState } from "react";
import "./StartModal.css";

const StartModal = ({ toggleOpenModal, setRunning, running, timer }) => {
  const [none, setNone] = useState("");
  const [rpm, setRpm] = useState("");
  const [bhi, setBhi] = useState("");
  const [ccm, setCcm] = useState("");
  const handleSave = () => {
    console.log(none, rpm, bhi, ccm);
    setNone("");
    setRpm("");
    setBhi("");
    setCcm("");
    toggleOpenModal();
    if (running) clearInterval(timer.current);
    setRunning(!running);
  };
  const handleCancel = () => {
    setNone("");
    setRpm("");
    setBhi("");
    setCcm("");
    toggleOpenModal();
  };

  return (
    <div className="startModal">
      <p className="start">START</p>
      <div className="hr"></div>
      <form action="">
        <p className="type">Type</p>
        <input
          type="radio"
          id="none"
          name="none"
          value="none"
          onChange={(e) => setNone(e.target.value)}
        />
        <label htmlFor="none">None</label>
        <br />
        <input
          type="radio"
          id="rpm"
          name="rpm"
          value="rpm"
          onChange={(e) => setRpm(e.target.value)}
        />
        <label htmlFor="rpm">RPM</label>
        <br />
        <input
          type="radio"
          id="bhi"
          name="bhi"
          value="bhi"
          onChange={(e) => setBhi(e.target.value)}
        />
        <label htmlFor="bhi">BHI</label>
        <br />
        <input
          type="radio"
          id="css"
          name="ccm"
          value="ccm"
          onChange={(e) => setCcm(e.target.value)}
        />
        <label htmlFor="ccm">CCM</label>
        <br />
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

export default StartModal;