import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import "./Rpm.css";

const RpmDesc = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { rpmsId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/rpms/${rpmsId}`);
        const lead = await response.data;
        setFirstName(lead.firstName);
        setPhone(lead.phone);
        setDateofbirth(lead.dateofbirth);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);
  return (
    <div className="Descriptions">
      <div className="first">
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">RPM</p>
        </div>
      </div>
      <div className="second">
      
        
        <div className="rm">
          <p className="font1">Phone(2)</p>
          <a href="phone" className="anch">
            {phone}
          </a>
        </div>
        <div className="rm">
          <p className="font1">Date of Birth</p>
          <a href="gmail" className="anch">
            {dateofbirth}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RpmDesc;
