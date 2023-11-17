import { useState } from "react";
import Rpmdropdown from "./Rpmdropdown";
import "./Rpm.css";
import Rpmtab from "./Rpmtab";
import Ccm from "./Ccm";
import Mtm from "./Mtm";
import Bhi from "./Bhi";
import CarePlan from "./CarePlan";
const RpmTabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="your-custom-class">
    <div className="tabs">
      <div
        className={`${toggleState === 1 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(1)}
      >
        RPM
      </div>
      <div
        className={`${toggleState === 2 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(2)}
      >
        CCM
      </div>
      <div
        className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(3)}
      >
        MTM
      </div>
      <div
        className={`${toggleState === 4 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(4)}
      >
        BHI
      </div>
      <div
        className={`${toggleState === 5 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(5)}
      >
        <span style={{whiteSpace:"nowrap"}}>Care Plan/Team</span>
      </div>
      <div
        className={`${toggleState === 6 ? "tab active-tab" : "tab"}`}
        onClick={() => toggleTab(6)}
      >
         <Rpmdropdown/>
      </div>
      {/* <div
        className={`${
          toggleState === 6 ? "content active-content" : "content"
        }`}
      >
       
      </div>  */}
    </div>
    <div className="contents">
      <div
        className={`${
          toggleState === 1 ? "content active-content" : "content"
        }`}
      >
        <Rpmtab />
      </div>
      <div
        className={`${
          toggleState === 2 ? "content active-content" : "content"
        }`}
      >
        <Ccm />
      </div>
      <div
        className={`${
          toggleState === 3 ? "content active-content" : "content"
        }`}
      >
        <Mtm />
      </div>
      <div
        className={`${
          toggleState === 4 ? "content active-content" : "content"
        }`}
      >
       < Bhi/>
      </div>
      <div
        className={`${
          toggleState === 5 ? "content active-content" : "content"
        }`}
      >
          < CarePlan/>
      </div>
      
    </div>
  </div>
  );
};
export default RpmTabs;
