import { useState } from "react";
import axios from "../api/axios";

const LeadModalContent = ({ toggleOpenModal }) => {
  const [inputObj, setInputObj] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    age: "",
    zip: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputObj({ ...inputObj, [name]: value });
  };
  const handleSave = async () => {
    setInputObj({
      ...inputObj,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      location: "",
      age: "",
      zip: "",
      description: "",
    });
    try {
      const response = await axios.post("/leads", inputObj);
      const data = await response.data;
      console.log("ddd===bbb::", JSON.stringify(data));
    } catch (err) {
      console.log("Err🔴r :", err.message);
    }
    toggleOpenModal();
    console.log(inputObj);
  };
  return (
    <section className="LeadModalContent">
      <div className="Inside">
        <p className="Head">New Lead</p>
        <div className="thickLine"></div>
        <p className="ReqInfo">
          <span className="star">*</span> = Required Information
        </p>
        <div className="ColorBar">Lead Information</div>
        <div className="row">
          <div className="column">
            <p className="font1 descMargin">First Name </p>
            <input
              type="text"
              className="InputSize"
              placeholder="First Name"
              name="firstName"
              onChange={handleInputChange}
              value={inputObj.firstName}
            />
            <p className="font1 descMargin">
              <span className="star">*</span>Last Name{" "}
            </p>
            <input
              type="text"
              className="InputSize"
              placeholder="Last Name"
              name="lastName"
              onChange={handleInputChange}
              value={inputObj.lastName}
            />

            <p className="font1 descMargin">Age </p>
            <input
              type="text"
              className="InputSize"
              name="age"
              onChange={handleInputChange}
              value={inputObj.age}
            />
          </div>
          <div className="column">
            <p className="font1 descMargin">Email </p>
            <input
              type="text"
              className="InputSize"
              name="email"
              onChange={handleInputChange}
              value={inputObj.email}
            />
            <p className="font1 descMargin">Phone </p>
            <input
              type="text"
              className="InputSize"
              name="phone"
              onChange={handleInputChange}
              value={inputObj.phone}
            />
          </div>
        </div>
        <div className="ColorBar">Address Information</div>
        <div className="row">
          <div className="column">
            <p className="font1 descMargin">Location </p>
            <input
              type="text"
              className="InputSize"
              name="location"
              onChange={handleInputChange}
              value={inputObj.location}
            />
            <p className="font1 descMargin">Zip/Postal Code </p>
            <input
              type="text"
              className="InputSize"
              name="zip"
              onChange={handleInputChange}
              value={inputObj.zip}
            />
          </div>
          <div className="column">
            {/* <p className="font1 descMargin">Description </p>
            <input type="text" className="InputSize" /> */}
          </div>
        </div>
        <div className="ColorBar">Description Information</div>
        <div className="box">
          <p className="font1 descMargin">Description </p>
          <textarea
            className="TextArea"
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleInputChange}
            value={inputObj.description}
          ></textarea>
        </div>
      </div>
      <div className="ButtonBar">
        <button className="Margin" onClick={toggleOpenModal}>
          Cancel
        </button>
        <button className="Margin" onClick={toggleOpenModal}>
          Save & New
        </button>
        <button className="Save" onClick={() => handleSave()}>
          Save
        </button>
      </div>
    </section>
  );
};

export default LeadModalContent;
