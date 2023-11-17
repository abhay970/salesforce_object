import React, { useState, useEffect } from "react";
import "./ComplianceHistory.css";
import infoIcon from "../image/info-icon.jpg";
import NewComponent from "./newComponent";


function ComplianceHistory() {
  const dropdownOptions = ["All", "RTM", "CCM", "RPM"];
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState("");
  const dropdownOptions1 = [
    "Current Month",
    "Previous Month",
    "Two Months Ago",
  ];
  const [selectedOption1, setSelectedOption1] = useState("Current Month");
  const handleDropdownChange1 = (event) => {
    const newSelectedOption1 = event.target.value;
    //Make api call here
    setSelectedOption1(newSelectedOption1);
    localStorage.setItem("selectedOption1", newSelectedOption1);
  };

  const items = [
    {
      id: 1,
      grouping: "RTM",
      text: "98975",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 2,
      grouping: "RTM",
      text: "98976",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 3,
      grouping: "RTM",
      text: "98977",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 4,
      grouping: "RTM",
      text: "98980",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 5,
      text: "98981",
      grouping: "RTM",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 6,
      grouping: "CCM",
      text: "99490",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 7,
      grouping: "CCM",
      text: " 9439",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 8,
      grouping: "CCM",
      text: "99491",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 9,
      grouping: "CCM",
      text: "99437",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 10,
      grouping: "RPM",
      text: "99453",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 11,
      grouping: "RPM",
      text: "99454",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 12,
      grouping: "RPM",
      text: "99457",
      info: infoIcon,
      status: "In-progress",
    },
    {
      id: 13,
      grouping: "RPM",
      text: "99458",
      info: infoIcon,
      status: "In-progress",
    },
  ];

  useEffect(() => {
    const storedSelectedOption = localStorage.getItem("selectedOption");
    if (storedSelectedOption) {
      setSelectedOption(storedSelectedOption);
    }
    const storedSelectedOption1 = localStorage.getItem("selectedOption1");
    if (storedSelectedOption1) {
      setSelectedOption1(storedSelectedOption1);
    }
  }, []);
  // const groupedItems = {};
  // items.forEach((item) => {
  //   if (!groupedItems[item.grouping]) {
  //     groupedItems[item.grouping] = [];
  //   }
  //   groupedItems[item.grouping].push(item);
  // });
  return (
    <>
      <div className="my-custom-class">
        <div className="scrollable-content">
          <div>
            <label htmlFor="dropdown"> {selectedOption}</label>
            <select 
            style={{   top: '115px', right: '63px', height:"20px", width:"125px"}}
              id="dropdown"
              name="dropdown"
              onChange={(e)=>{setSelectedOption(e.target.value);localStorage.setItem("selectedOption", e.target.value);}}
              value={selectedOption} 
            >
              {dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <br></br>
            <label htmlFor="dropdown1">{selectedOption1}</label>
            <select
              id="dropdown1"
              name="dropdown1"
              onChange={handleDropdownChange1}
              value={selectedOption1}
            >
              {dropdownOptions1.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <hr />
          <br></br>
          {selectedOption === "RPM" && <span className="grouping">{selectedOption}</span>}
          {selectedOption === "CCM" && <span className="grouping">{selectedOption}</span>}
          {selectedOption === "RTM" && <span className="grouping">{selectedOption}</span>}
          {selectedOption === "All" && <span className="grouping">RPM</span>}

          { (selectedOption === "All" || selectedOption === "RPM") && items.filter(item => item.grouping === "RPM").map(filteredData => (
      <div>
      <NewComponent data={filteredData}/>
      </div>
    ))}
          {selectedOption === "All" && <span className="grouping">CCM</span>}
          { (selectedOption === "All" || selectedOption === "CCM") &&  items.filter(item => item.grouping === "CCM").map(filteredData => (
      <div>
      <NewComponent data={filteredData}/>
      </div>
    ))}
          {selectedOption === "All" && <span className="grouping">RTM</span>}
          {(selectedOption === "All" || selectedOption === "RTM") && items.filter(item => item.grouping === "RTM").map(filteredData => (
      <div>
      <NewComponent data={filteredData}/>
      </div>
    ))}

        </div>
      </div>
      </>
  );
}
export default ComplianceHistory;
