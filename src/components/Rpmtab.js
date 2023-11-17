import { useState } from "react";
import ClinicalPro from "./ClinicalPro";
import Device from "./Device";

const Rpmtab = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="your-custom-classs">
      <div className="tabs">
        <div
          className={`${toggleState === 1 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(1)}
        >
          Clinical Program Monitoring
        </div>
        <div
          className={`${toggleState === 2 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(2)}
        >
          Device
        </div>
        <div
          className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(3)}
        >
          More
        </div>
      </div>

      <div className="contents">
        <div
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          }`}
        >
          <ClinicalPro />
        </div>

        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          }`}
        >
          <Device />
        </div>

        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          }`}
        >
           ////
        </div>
      </div> 
    </div>
  );
};

export default Rpmtab;
