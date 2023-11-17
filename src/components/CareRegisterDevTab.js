import { useState } from "react";
import Related from "./Related";
import CareRegisterDevDetails from "./CareRegisterDevDetails";
import News from "./News";
import Dropdown from "../image/dropdown-1.png";
import "./CareRegisterDev.css";

const CareRegisterDevTab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isPatientInfoVisible, setPatientInfoVisible] = useState(false);

  // Define a function to toggle the visibility of patient info
  const togglePatientInfo = () => {
    setPatientInfoVisible(!isPatientInfoVisible);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <h3
        style={{
          backgroundColor: 'rgb(243, 243, 243)',
          padding: '2px',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={togglePatientInfo}
      >
        {isPatientInfoVisible ? (
          <img src={Dropdown} alt="Dropdown" style={{ width: "30px" }} />
        ) : (
          '>'
        )}{' '}
        <span style={{ fontSize: '15px' }}>&nbsp;&nbsp;Information</span>
      </h3>
      {isPatientInfoVisible && (
        <>
          <div className="tabss">
            {/* <div
              className={`${toggleState === 1 ? "tabi active-tab" : "tabi"}`}
              onClick={() => toggleTab(1)}
            >
              Related
            </div> */}
            <div
              className={`${toggleState === 2 ? "tabi active-tab" : "tabi"}`}
              onClick={() => toggleTab(2)}
            >
              Details
            </div>
            {/* <div
              className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
              onClick={() => toggleTab(3)}
            >
              News
            </div> */}
          </div>

          <div className="contents">
            {/* <div
              className={`${
                toggleState === 1 ? "content active-content" : "content"
              }`}
            >
              < Related/>
            </div> */}

            <div
              className={`${
                toggleState === 2 ? "content active-content" : "content"
              }`}
            >
              <CareRegisterDevDetails />
            </div>

            {/* <div
              className={`${
                toggleState === 3 ? "content active-content" : "content"
              }`}
            >
              <News />
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default CareRegisterDevTab;
