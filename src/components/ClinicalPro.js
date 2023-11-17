import { useState } from "react";
import Chart from "./Chart";
const ClinicalPro = () => {
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
          Charts 
        </div>
        <div
          className={`${toggleState === 2 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(2)}
        >
          Observation
        </div>
        <div
          className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(3)}
        >
          Consent
        </div>
      </div>

      {/* <div className="contents">
        <div
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          }`}
        >
          <AccDetails />
        </div>

        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          }`}
        >
          <Related />
        </div>

        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          }`}
        >
          <News />
        </div>
      </div> */}
    </div>
  );
};

export default ClinicalPro;
