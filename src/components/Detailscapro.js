import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axioscapro from "../api/axioscapro";
// import axios from "../api/axios";
// import EditPen from "../image/edit-pen.png";
const Detailscapro = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [location, setLocation] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState("");
//   const [intend, setIntend] = useState("");
  const { leadId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axioscapro.get(`/cares/${leadId}`);
        const lead = await response.data;
        console.log('>>>>')
        setObj(lead);
        setId(lead.id);
        setName(lead.Name);
        // setLastName(lead.lastName);
        // setPhone(lead.phone);
        // setEmail(lead.email);
        // setLocation(lead.location);
        // setAge(lead.age);
        // setGender(lead.gender);
        // setWeight(lead.weight);
        // setIntend(lead.intend);
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
      Name,
      
    };
    try {
      const response = await axios.put(`cares/${leadId}`, newObj);
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
            {/* <img
              src={EditPen}
              alt="Edit Pen"
              width="15px"
              height="15px"
              className="EditPen"
            /> */}
          </div>
          <hr />
          <p className="font1"> Name ddnn </p>
          <div className="flex">
            <p className="black">{Name}</p>
       
          </div>
          <hr />
          {/* <p className="font1">Last Name </p>
          <div className="black">{lastName}</div>
          <hr />
          <p className="font1">Phone </p>
          <div className="black">{phone}</div>
          <hr />
          <p className="font1">Email </p>
          <div className="black">{email}</div>
          <hr />
        </div>
        <div className="column">
          <p className="font1">Location </p>
          <div className="black">{location}</div>
          <hr />
          <p className="font1">Age </p>
          <div className="black">{age}</div>
          <hr />
          <p className="font1">Gender </p>
          <div className="black">{gender}</div>
          <hr />
          <p className="font1">Weight </p>
          <div className="black">{weight}</div>
          <hr />
          <p className="font1">Intend </p>
          <div className="black">{intend}</div>
          <hr />*/}
        </div> 
      </div>
    </div>
  );
};

export default Detailscapro;
