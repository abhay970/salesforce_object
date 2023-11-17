import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import EditPen from "../image/edit-pen.png";

const CareObserDetails = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budgetamount, setBudgetamount] = useState("");
  const [zip, setZip] = useState("");
  const { careobserId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/careobservation/${careobserId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setName(lead.name);
        setDescription(lead.description);
       
        setBudgetamount(lead.budgetamount);
        setZip(lead.zip);
        
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
      description,
    //   phone,
    //   email,
    //   location,
     
      zip,
      budgetamount,
    };
    try {
      const response = await axios.put(`leads/${careobserId}`, newObj);
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
          <p className="font1"> Name </p>
          <div className="flex">
            <p className="black">{name}</p>
          </div>
          <hr />
          <p className="font1">Description </p>
          <div className="black">{description}</div>
          <hr />
          {/* <p className="font1">Phone </p>
          <div className="black">{phone}</div>
          <hr />
          <p className="font1">Email </p>
          <div className="black">{email}</div>
          <hr /> */}
        </div>
        <div className="column">
          {/* <p className="font1">Location </p>
          <div className="black">{location}</div>
          <hr /> */}
          <p className="font1">Budget Amount </p>
          <div className="black">{budgetamount}</div>
          <hr />
          <p className="font1">Zip/Postal Code </p>
          <div className="black">{zip}</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CareObserDetails;
