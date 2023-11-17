
import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const CodeSetBundleDesc = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { codesetbundleId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/codesetbundles/${codesetbundleId}`);
        const lead = await response.data;
        setName(lead.name);
        setPhone(lead.phone);
        setEmail(lead.email);
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
          <p className="font">Care Programs</p>
          <h1 className="fonth1">{name}</h1>
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
          <p className="font1">Start Date</p>
          <p>23/12/2012</p>
        </div>
        <div className="rm">
          <p className="font1">End Date </p>
          <p> </p>
        </div>
        <div className="rm">
          <p className="font1">Status</p>
          <p className="font1">New  </p>
          <a href="phone" className="anch">
             
          </a>
        </div>
        <div className="rm">
          <p className="font1">Program Sponsor</p>
           
          <a href="phone" className="anch">
             
          </a>
        </div>
        <div className="rm">
          <p className="font1">Budget Amount</p>
          <a href="phone" className="anch">
             
          </a>
        </div>
        <div className="rm">
          <p className="font1">Category</p>
          <a href="gmail" className="anch">
            {/* {email} */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodeSetBundleDesc;
