 

// export default Rpm;
import React from 'react';
// import Card from './Card';
import RpmDesc from './RpmDesc';
import RpmTabs from './RpmTabs';
import ComplianceHistory from './ComplianceHistory';
import './Rpm.css'; // Create a CSS file for styling
import PatiPatientMonSesTimer from './PatientMonSesTimer';

function Rpm() {
  return (
    <div className="containeri">
      <div className='c1'><PatiPatientMonSesTimer/></div>
      <div className='c1 c2'>
        <div className=''> <RpmDesc /></div>
        <div className=''> <RpmTabs /></div>
      </div>
      <div className='c3'><ComplianceHistory /></div>
      {/* <div className="left-column">
        <PatiPatientMonSesTimer/>
      </div>
      <div className="middle-column">
        <RpmDesc />
        <RpmTabs />
      </div>
      <div className="right-column">
        <ComplianceHistory />
      </div> */}
    </div>
  );
}

export default Rpm;


