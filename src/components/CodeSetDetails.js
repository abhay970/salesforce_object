import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import EditPen from "../image/edit-pen.png";

const CodeSetDetails = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [codesettype, setCodesettype] = useState("");
  const [age, setAge] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const { codesetId} = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/codesets/${codesetId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setName(lead.name);
        setCode(lead.code);
        setPhone(lead.phone);
        setEmail(lead.email);
        setCodesettype(lead.codesettype);
        setAge(lead.age);
        setZip(lead.zip);
        setDescription(lead.description);
      } catch (error) {
        console.log("Err🔴r: ", error.message);
      }
    };
    fetchLead();
  }, []);

  const handleClick = async () => {
    console.log("Btn");
    const newObj = {
      id,
      name,
      code,
      
      codesettype,
      age,
      zip,
      description,
    };
    try {
      const response = await axios.put(`leads/${codesetId}`, newObj);
      console.log("Response :", response);
    } catch (err) {
      console.log("Err🔴r: ", err.message);
    }
    setObj(newObj);
    console.log("newobj: ", JSON.stringify(newObj));
  };
  return (
    <div className="Details">
      <div className="row">
        <div className="column">
          <p className="font1">id </p>
          <div className="flex">
            <p className="black">{id}</p>
          </div>
          <hr />
          <p className="font1">Name </p>
          <div className="flex">
            <p className="black">{name}</p>
          </div>
          <hr />
          <p className="font1">Code </p>
          <div className="black">{code}</div>
          <hr />
         
        </div>
        <div className="column">
          <p className="font1">Code Set type </p>
          <div className="black">{codesettype}</div>
          <hr />
        
          
        </div>
      </div>
    </div>
  );
};

export default CodeSetDetails;
