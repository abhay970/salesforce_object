import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import "./CareRegisterDev.css";

const CareRegisterDevDesc = () => {
  const [open, setOpen] = useState(false);
  const [devicename, setDevicename] = useState("");
  const [status, setStatus] = useState("");
  const [patient, setPatient] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { careregistersId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/careregisterdevice/${careregistersId}`);
        const lead = await response.data;
        setDevicename(lead.devicename);
        setStatus(lead.status);
        setPatient(lead.patient);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);
  return (
    <div className="Description11">
      <div className="first1">
        <img src={Logo} alt="img not aviable" className="DesAccountLogos" />
        <div className="marginFont">
          <p className="font">Device Name</p>
          <h1 className="fonth1">{devicename}</h1>
        </div>
        <div className="btn">
          <button className="clRight">New Note</button>
          <button className="clRight">Edit</button>
          <button className="clRight edit">Delete</button>
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
      <div className="seconds">
        <div className="rm">
          <p className="font1">Device</p>
          <p>Smartmeter Glucometer</p>
        </div>
        <div className="rm">
          <p className="font1">Status</p>
          <p>Active</p>
        </div>
        <div className="rm">
          <p className="font1"> Patient</p>
          <a href="phone" className="anch">
            {patient}
          </a>
        </div>
        <div className="rm">
          <p className="font1">Device Type</p>
          {/* <p>Smartmeter Glucometer</p> */}
        </div>
        <div className="rm">
          <p className="font1">Unique Device ID 1</p>
          {/* <p>Smartmeter Glucometer</p> */}
        </div>
        <div className="rm">
          <p className="font1">Unique Device ID 1 Ussuer</p>
          {/* <p>Smartmeter Glucometer</p> */}
        </div>
         
        
       
      </div>
    </div>
  );
};

export default CareRegisterDevDesc;
