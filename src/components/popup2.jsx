import React from 'react'

export default function Popup2(data) {
    
  return (
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              <section className="Development">
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
                      {/* <input type="text" className="InputSize" placeholder="First Name" /> */}
                      <input
                        type="text"
                        className="InputSize"
                        name="firstName"
                        placeholder="first Name"
                        onChange={handleInputChange}
                        value={formInputs.firstName}
                      />
                      <p className="font1 descMargin">
                        <span className="star">*</span>Last Name{" "}
                      </p>
                      <input
                        type="text"
                        className="InputSize"
                        name="lastName"
                        placeholder="last Name"
                        onChange={handleInputChange}
                        value={formInputs.lastName}
                      />

                      <p className="font1 descMargin">Age </p>
                      <input
                        type="text"
                        className="InputSize"
                        name="age"
                        placeholder="age"
                        onChange={handleInputChange}
                        value={formInputs.age}
                      />
                    </div>
                    <div className="column">
                      <p className="font1 descMargin">Email </p>
                      <input
                        type="text"
                        className="InputSize"
                        name="email"
                        placeholder="email"
                        onChange={handleInputChange}
                        value={formInputs.email}
                      />
                      <p className="font1 descMargin">Phone </p>
                      <input
                        type="text"
                        className="InputSize"
                        name="phone"
                        placeholder="phone number"
                        onChange={handleInputChange}
                        value={formInputs.phone}
                      />
                    </div>
                  </div>
                  <div className="ColorBar">Address Information</div>
                  <div className="row">
                    <div className="column">
                      <p className="font1 descMargin">Location </p>
                      <input type="text" className="InputSize" />
                      <p className="font1 descMargin">Zip/Postal Code </p>
                      <input type="text" className="InputSize" />
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
                    ></textarea>
                  </div>
                </div>
                <div className="ButtonBar">
                  <button
                    className="Margin"
                    onClick={() => setButtonPopup(false)}
                  >
                    Cancel
                  </button>
                  <button className="Margin">Save & New</button>
                  <button className="Save" onClick={handleClick}>
                    Save
                  </button>
                </div>
              </section>
            </div>
          </Popup>
    </div>
  )
}
