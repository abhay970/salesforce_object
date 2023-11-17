import { useState } from "react";
import Related from "./Related";
import Details from "./Details";
import News from "./News";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`${toggleState === 1 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(1)}
        >
          Details
        </div>
        <div
          className={`${toggleState === 2 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(2)}
        >
          Related
        </div>
        <div
          className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(3)}
        >
          News
        </div>
      </div>

      <div className="contents">
        <div
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          }`}
        >
          <Details />
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
      </div>
    </div>
  );
};

export default Tabs;
