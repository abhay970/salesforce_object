import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Logo from "../image/lead_120.png";
import Play from "../image/Down-Carrot-512.webp";
// import AccountNew from "./AccountNew";
import CareNew from "./CareNew";
const CareProgs = () => {
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
        const response = await axios.get("http://localhost:5000/getall/care_program");
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
      <div className="firstWithExt">
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">Care Programs</p>
          <h1 className="fonth1">All Care Programs</h1>
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
       <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
            <th>  Name</th>
            <th>Last Modified Date </th>
            <th>Last Modified By</th>
            <th>Parent Program </th>
            <th>Program Sponsor </th>
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
                  <Link to={`/careprogs/${lead.id}`}>{lead.name}</Link>
                </td>
                <td>{lead.lastModifiedDate}</td>
              <td>{lead.lastModifiedby}</td>
              <td>{lead.programSponsor}</td>
              <td>{lead.parentProgram}</td>
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
            <CareNew toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CareProgs;
