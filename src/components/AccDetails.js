import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { Link } from "react-router-dom";

// import EditPen from "../image/edit-pen.png";
const AccDetails = () => {
  // const hrStyle = {
     
  //   paddingright:"200px",
  //   width: "80%"
  // };
  const [obj, setObj] = useState({});
  const { accountsId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        console.log(accountsId, "mnnnnmmmmmmmmm");
        const response = await axios.get(`http://localhost:5000/getalls/account/${accountsId}`);
        const lead = await response.data;
        console.log(lead, "bajbjjajjajj");
        setObj(lead);
        console.log(obj, obj.email, "objjjj");
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, [accountsId]);
  
  // useEffect(() => {
  //   const fetchLead = async () => {
  //     try {
  //       console.log(accountsId,"accIdddddddddddddd")
  //       const response = await axios.get(`http://localhost:5000/getall/account/${accountsId}`);
  //       const lead = await response.data;
  //       console.log(lead,"Leadsdsdsdsdsdsdsd")
  //       setObj(lead[0]);
  //       console.log(obj,obj.first_name,"objjjjext")
  //     } catch (error) {
  //       console.log("Err🔴r: ", error.message);
  //     }
  //   };
  //   fetchLead();
  // }, [accountsId]);
  return (
    <div className="Details">
      <div className="row">
        <div className="column">
          <p className="font1">id </p>
          <div className="flex">
            <p className="black">{obj.id}</p>
          </div>
          <hr />
          <p className="font1">First Name </p>
          <div className="flex">
          {/* <Link to={`/careprogenroll/${obj.id}`}>{obj.first_name}</Link> */}
            <p className="black">{obj.first_name}</p>
          </div>
          <hr />
         
          <p className="font1">Phone </p>
          <div className="black">{obj.phone}</div>
          <hr />
          <p className="font1">Email </p>
          <div className="black">{obj.email}</div>
          <hr />
        </div>
        <div className="column">
        <p className="font1">Last Name </p>
          <div className="black">{obj.last_name}</div>
          <hr  />
        </div>
      </div>
    </div>
  );
};
export default AccDetails;
