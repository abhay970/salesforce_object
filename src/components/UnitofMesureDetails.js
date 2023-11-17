import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import EditPen from "../image/edit-pen.png";

const UnitofMesureDetails = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [name, setName]=useState("");
  const [unitcode, setUnitcode]=useState("");
  const [description, setDescription] = useState("");
  const { unitofmesureId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/unitofmesure/${unitofmesureId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setName(lead.name);
        setUnitcode(lead.unitcode);
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
      unitcode,
      description,
    };
    try {
      const response = await axios.put(`leads/${unitofmesureId}`, newObj);
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
          <p className="font1">Unit Code</p>
          <div className="black">{unitcode}</div>
          <hr />
         
        </div>
        <div className="column">
          <p className="font1">Description </p>
          <div className="black">{description}</div>
          <hr />
          
        </div>
      </div>
    </div>
  );
};

export default UnitofMesureDetails;
