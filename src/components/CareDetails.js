import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import EditPen from "../image/edit-pen.png";

const CareDetails = () => {
  const [obj, setObj] = useState({});
  const { accountsId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        console.log(accountsId,"accIdddddddddddddd")
        const response = await axios.get(`http://localhost:5000/getAcc/${accountsId}`);
        const lead = await response.data;
        console.log(lead,"Leadsdsdsdsdsdsdsd")
        setObj(lead[0]);
        console.log(obj,obj.name,"objjjjext")
      } catch (error) {
        console.log("Err🔴r: ", error.message);
      }
    };
    fetchLead();
  }, []);
 
  return (
    <div className="Details">
      <div className="row">
        <div className="column">
          <p className="font1">id </p>
          <div className="flex">
            <p className="black">{obj.id}</p>
          </div>
          <hr />
          <p className="font1"> Name </p>
          <div className="flex">
            <p className="black">{obj.name}</p>
          </div>
          <hr />
          {/* <p className="font1">Description </p>
          <div className="black">{description}</div>
          <hr /> */}
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
          {/* <p className="font1">Budget Amount </p>
          <div className="black">{budgetamount}</div>
          <hr />
          <p className="font1">Zip/Postal Code </p>
          <div className="black">{zip}</div>
          <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default CareDetails;
