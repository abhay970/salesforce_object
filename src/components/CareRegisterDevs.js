import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Logo from "../image/lead_120.png";
import Play from "../image/Down-Carrot-512.webp";
const CareRegisterDevs = () => {
  const [leads, setLeads] = useState([]);
  const [open, setOpen] = useState(false);
  const options = ["New Note", "Delete", "Check for New Data"];
  // popup strt
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //popup end
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("/careregisterdevice");
        const leads = await response.data;
        setLeads(leads);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchLeads();
  }, []);
  return (
    <div className="Leads">
      <div className="first">
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">Care Register Device</p>
          <h1 className="fonth1">Denial</h1>
        </div>
        <div className="btn">
          <button className="clRight" onClick={toggleOpenModal}>
            New
          </button>
          <button className="setRgt">
            <img
              src={Play}
              alt="play"
              style={{ height: "12.3px", width: "13px" }}
              onClick={() => setOpen(!open)}
            />
          </button>
          <div className="Relative">
            {open && (
              <div className="items">
                <ul>
                  {options.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <table>
        <thead>
          <tr>
            <th style={{ borderLeft: "none", borderRight: "none" }}></th>
            <th style={{ borderLeft: "none", paddingLeft: "14px" }}>
              <input type="checkbox" />
            </th>
            <th>Id</th>
            <th>Care Register</th>
            <th>Name Type</th>
            <th>Device</th>
            <th>Status</th>
            <th>Patient</th>
             <th>Device Type</th>
             <th>Unique Device ID 1</th>
             <th>Unique Device ID 1 Issure</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={lead.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="checkbox"
                  id={lead.id}
                  name={lead.id}
                  value={lead.id}
                />
              </td>
              <td>{lead.id}</td>
              <td>
                <Link to={`/careregisterdevice/${lead.id}`}>{lead.careregister}</Link>
              </td>
              <td>{lead.nametype}</td>
              <td>{lead.device}</td>
              <td>{lead.status}</td>
              <td>{lead.patient}</td>
              <td>{lead.devicetype}</td>
              <td>{lead.uniquedeviceid1}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
       <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
            <th>Care Register</th>
            <th>Name Type</th>
            <th>Device</th>
            <th>Status</th>
            <th>Patient</th>
             <th>Device Type</th>
             <th>Unique Device ID 1</th>
             <th>Unique Device ID 1 Issure</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={lead.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    id={lead.id}
                    name={lead.id}
                    value={lead.id}
                  />
                </td>
                <td>{lead.id}</td>
                <td>
                <Link to={`/careregisterdevice/${lead.id}`}>{lead.careregister}</Link>
                </td>
                <td>{lead.nametype}</td>
              <td>{lead.device}</td>
              <td>{lead.status}</td>
              <td>{lead.patient}</td>
              <td>{lead.devicetype}</td>
              <td>{lead.uniquedeviceid1}</td>
              <td>{lead.uniquedeviceid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            {/* <Carepopup toggleOpenModal={toggleOpenModal} /> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default CareRegisterDevs;