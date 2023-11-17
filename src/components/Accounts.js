import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Logo from "../image/lead_120.png";
import Play from "../image/Down-Carrot-512.webp";
import AccountNew from "./AccountNew";
// import { BsFillTrashFill } from "react-icons/bs";
const Accounts = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };
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
        const response = await axios.get("http://localhost:5000/getall/account");
        const leads = await response.data;
        setLeads(leads);
        console.log(leads)
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchLeads();
  }, []);
  //for delete table start
  const deleteRow = async (id, index) => {
    try {
      // Send a DELETE request to the server to remove the data
      await axios.delete(`/accounts/${id}`);
      const updatedLeads = [...leads];
      updatedLeads.splice(index, 1);
      setLeads(updatedLeads);
    } catch (err) {
      console.log("Error delete Data", err.message);
    }
  };
  //end delete table

  return (
    <div className="Leads">
      <div className="firstWithExt">
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">Accounts</p>
          <h1 className="fonth1">Ms Shelly Brownell</h1>
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
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th></th>
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
             
              <td>
                <Link to={`/accounts/${lead.id}`}>{lead.first_name}</Link>
              </td>
              <td>{lead.last_name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.age}</td>

              {/* Render the row data here */}
              <td className="fit">
                <span className="actions">
                  {/* <BsFillTrashFill
                    className="delete-btn"
                    onClick={() => deleteRow(lead.id, index)}
                  /> */}
                  <select onClick={handleToggle}>
                    {showOptions ? "Hide Options" : "Show Options"}
                  </select>
                  {showOptions && (
                    <p
                      className="delete-btn"
                      onClick={() => deleteRow(lead.id, index)}
                    >
                      Delete
                    </p>
                  )}
                </span>
              </td>
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
            <AccountNew toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
