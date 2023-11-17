import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const CareProgEnrollDetails = () => {
  const [lead, setLead] = useState({});
  const { accountsId } = useParams();

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getalls/care_program_enrolle/${accountsId}`);
        const fetchedLead = response.data;
        setLead(fetchedLead);
      } catch (err) {
        console.error("Error fetching lead:", err.message);
      }
    };

    fetchLead();
  }, [accountsId]);

  return (
    <div className="Details">
      <div className="row">
        <div className="column">
          <p className="font1">Id</p>
          <div className="flex">
            <p className="black">{lead.id}</p>
          </div>
          <hr />
          <p className="font1">First Name</p>
          <div className="flex">
            <p className="black">{lead.name}</p>
          </div>
          <hr />
          <p className="font1">Phone</p>
          <div className="flex">
            <p className="black">{lead.phone}</p>
          </div>
          <hr />
          <p className="font1">Email</p>
          <div className="flex">
            <p className="black">{lead.email}</p>
          </div>
          <hr />
        </div>
        <div className="column">
          <p className="font1">Last Name</p>
          <div className="flex">
            <p className="black">{lead.last_name}</p>
          </div>
          <hr />
          {/* Add additional properties as needed */}
        </div>
      </div>
    </div>
  );
};

export default CareProgEnrollDetails;
