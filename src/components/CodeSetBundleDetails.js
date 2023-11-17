import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import EditPen from "../image/edit-pen.png";

const CodeSetBundleDetails = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [codeset1, setCodeset1] = useState("");
  const [codeset2, setCodeset2] = useState("");
  const [codeset3, setCodeset3] = useState("");
  const [budgetamount, setBudgetamount] = useState("");
  const [zip, setZip] = useState("");
  
  const { codesetbundleId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/codesetbundles/${codesetbundleId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setName(lead.name);
        setDescription(lead.description);
        setCodeset1(lead.codeset1);
        setCodeset2(lead.codeset2);
        setCodeset3(lead.codeset3);
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
      codeset1,
      codeset2,
      codeset3,
      zip,
      budgetamount,
    };
    try {
      const response = await axios.put(`leads/${codesetbundleId}`, newObj);
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
          <p className="font1">codeset1 </p>
          <div className="black">{codeset1}</div>
          <hr />
          <p className="font1">Code Set2 </p>
          <div className="black">{codeset2}</div>
          <hr />
        </div>
        <div className="column">
          {/* <p className="font1">Location </p>
          <div className="black">{location}</div>
          <hr /> */}
          <p className="font1">Code Set3 </p>
          <div className="black">{codeset3}</div>
          <hr />
          {/* <p className="font1">Zip/Postal Code </p>
          <div className="black">{zip}</div>
          <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default CodeSetBundleDetails;
