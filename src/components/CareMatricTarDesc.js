import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const CareMatricTarDesc = () => {
  const [open, setOpen] = useState(false);
  const [unitcode, setUnitcode] = useState("");
  
  const options = ["New Note", "Delete", "Check for New Data"];
  const { carematrictarId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/carematrictarget/${carematrictarId}`);
        const lead = await response.data;
        setUnitcode(lead.unitcode);
       
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);
  return (
    <div className="Description">
      <div className="first">
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">Unit code</p>
          <h1 className="fonth1">{unitcode}</h1>
        </div>
        <div className="btn">
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
      <div className="second">
        <div className="rm">
          <p className="font1">Title</p>
          <p>SVP, Technology</p>
        </div>
        {/* <div className="rm">
          <p className="font1">Company</p>
          <p>Western Telecommunications Corp.</p>
        </div> */}
        {/* <div className="rm">
          <p className="font1">Phone(2)</p>
          <a href="phone" className="anch">
            {phone}
          </a>
        </div> */}
        {/* <div className="rm">
          <p className="font1">Email</p>
          <a href="gmail" className="anch">
            {email}
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CareMatricTarDesc;
