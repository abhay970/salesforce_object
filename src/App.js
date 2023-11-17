import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Leads from "./components/Leads";
import Lead from "./components/Lead";
// import Development from "./components/Development";
import Accounts from "./components/Accounts";
import Account from "./components/Account";
import CareProg from "./components/CareProg";
import CareProgs from "./components/CareProgs";
import CareProgEnroll from "./components/CareProgEnroll";
import CareProgEnrolls from "./components/CareProgEnrolls";
import CareObservation from "./components/CareObservation";
import CareObservations from "./components/CareObservations";
import CodeSet from "./components/CodeSet";
import CodeSets from "./components/CodeSets";
import CodeSetBundle from "./components/CodeSetBundle";
import CodeSetBundles from "./components/CodeSetBundles";
import UnitofMesure from "./components/UnitofMesure";
import UnitofMesures from "./components/UnitofMesures";
import CareMatricTar from "./components/CareMatricTar";
import CareMatricTars from "./components/CareMatricTars";
import ComplianceHistory from "./components/ComplianceHistory";
import Rpm from "./components/Rpm";
import Rpms from "./components/Rpms";
import Timer from "./components/PatientMonSesTimer";
import CareRegisterDev from "./components/CareRegisterDev";
import CareRegisterDevs from "./components/CareRegisterDevs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/leads">
          <Route index element={<Leads />} />
          <Route path="/leads/:leadId" element={<Lead />} />
        </Route>
        <Route path="/accounts">
          <Route index element={<Accounts />} />
          <Route path="/accounts/:accountsId" element={<Account />} />
        </Route>
        <Route path="/careprogs">
          <Route index element={<CareProgs />} />
          <Route path="/careprogs/:careprogsId" element={<CareProg />} />
        </Route>
        <Route path="/careprogenroll">
          <Route index element={<CareProgEnrolls />} />
          <Route path="/careprogenroll/:careprogenrollsId" element={<CareProgEnroll />} />
        </Route>
        <Route path="/careobservation">
          <Route index element={<CareObservations />} />
          <Route path="/careobservation/:careobserId" element={<CareObservation />} />
        </Route>
        <Route path="/codesets">
          <Route index element={<CodeSets />} />
          <Route path="/codesets/:codesetId" element={<CodeSet />} />
        </Route>
        <Route path="/codesetbundles">
          <Route index element={<CodeSetBundles />} />
          <Route path="/codesetbundles/:codesetbundleId" element={<CodeSetBundle />} />
        </Route>
        <Route path="/unitofmesure">
          <Route index element={<UnitofMesures />} />
          <Route path="/unitofmesure/:unitofmesureId" element={<UnitofMesure />} />
        </Route>
        <Route path="/carematrictarget">
          <Route index element={<CareMatricTars />} />
          <Route path="/carematrictarget/:carematrictarId" element={<CareMatricTar />} />
        </Route>
        <Route path="/rpms">
          <Route index element={<Rpms />} />
          <Route path="/rpms/:rpmsId" element={<Rpm />} />
        </Route>
        <Route path="/careregisterdevice">
          <Route index element={<CareRegisterDevs />} />
          <Route path="/careregisterdevice/:careregistersId" element={<CareRegisterDev />} />
        </Route>
        <Route path="/dev" element={<Timer />} />
        <Route path="/complience" element={<ComplianceHistory />} />
      </Route>
    </Routes>
  );
}
export default App;
