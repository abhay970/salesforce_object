import { useState, useEffect, useRef } from "react";
import "./PatientMonSesTimer.css";
import StartModal from "./StartModal";
import StopModal from "./StopModal";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Dropdown from "../image/dropdown-1.png";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [openModal, setOpenModal] = useState(false); //modal
  const [openStopModal, setOpenStopModal] = useState(false); //stop modal
  const timer = useRef();
  const [isPatientInfoVisible, setPatientInfoVisible] = useState(false);

  // Define a function to toggle the visibility of patient info
  const togglePatientInfo = () => {
    setPatientInfoVisible(!isPatientInfoVisible);
  };
  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);
  //modal
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const toggleOpenStopModal = () => {
    setOpenStopModal(!openStopModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //end
  const format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  };
  const handleStart = () => {
    if (time === 0) toggleOpenModal();
    else setRunning(true);
  };
  const handlePause = () => {
    setRunning(false);
  };
  const handleStop = () => {
    if (running) clearInterval(timer.current);
    setRunning(false);
    toggleOpenStopModal();
  };
  const handleRefresh = () => {
    if (running) clearInterval(timer.current);
    setRunning(false);
    setTime(0);
  };

  //   ...............
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { rpmsId } = useParams();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/rpms/${rpmsId}`);
        const lead = await response.data;
        //   setFirstName(lead.firstName);
        setEmail(lead.email);
        setFirstName(lead.firstName);
        setGender(lead.gender);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);
  
  //////////

  return (
    <>
      <div className="timer-container">
        <h4>Please remember to start and stop the monitoring session</h4>
        <div className="action">
          <p className="timer">
            <span>&#x1F552;</span>
            {format(time)}
          </p>
          {running ? (
            <button className="playbtn" onClick={() => handlePause()}>
              <span className="pause">&#8214;</span>
              {/* Pause */}
            </button>
          ) : (
            <button className="playbtn" onClick={() => handleStart()}>
              &#8227;
              {/* Play */}
            </button>
          )}
          <button className="stopbtn" onClick={() => handleStop()}>
            &#8718;
            {/* Stop */}
          </button>
          <button className="restartbtn" onClick={() => handleRefresh()}>
            &#10227;
            {/* refresh */}
          </button>
        </div>
        <br></br>

        <div className="row">
        <h3
        style={{
          backgroundColor: 'rgb(243, 243, 243)',
          padding: '12px',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={togglePatientInfo}
      >
        {isPatientInfoVisible ? (
          <img src={Dropdown} alt="Dropdown" style={{width:"30px"}} />  
        ) : (
          '>'  
        )}{' '}
       <span style={{ fontSize: '15px' }}>&nbsp;&nbsp;Patient</span> 
      </h3>
      {isPatientInfoVisible && (
        <div className="column">
          <p className="font1">Account Name</p>
          <a href="firstName" className="anch">
            {firstName}
          </a>
          <p className="font1">Gender</p>
          <a href="gender" className="anch">
            {gender}
          </a>
        </div>
      )}
      {isPatientInfoVisible && (
        <div className="column">
          <p className="font1">Email</p>
          <a href="email" className="anch">
            {email}
          </a>
        </div>
      )}
    </div>

      </div>
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <StartModal
              toggleOpenModal={toggleOpenModal}
              setRunning={setRunning}
              running={running}
              timer={timer}
            />
          </div>
        </div>
      )}
      {openStopModal && (
        <div className="modal">
          <div className="overlay">
            <StopModal
              toggleOpenStopModal={toggleOpenStopModal}
              setRunning={setRunning}
              running={running}
              timer={timer}
              time={time}
              format={format}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
