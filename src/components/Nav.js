import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="navigation">
        <span className="sp1"></span>
        <span className="sp2"></span>
        <span className="sp3"></span>
        <span className="sp4"></span>
        <span className="sp5"></span>
        <span className="sp6"></span>
        <span className="sp7"></span>
        <span className="sp8"></span>
        <span className="sp9"></span>
      </div>
      <ul>
        <li>
          <Link to="/" style={{ marginLeft: "10px" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/leads">Leads</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/careprogs">Care Program</Link>
        </li>
        <li>
          <Link to="/careprogenroll">Care Program Enrollee</Link>
        </li>
        {/* <li>
          <Link to="/careobservation">Care Observation</Link>
        </li>
        <li>
          <Link to="/codesets">Code Set</Link>
        </li>
        <li>
          <Link to="/codesetbundles">Code Set Bundle</Link>
        </li>
        <li>
          <Link to="/unitofmesure">Unit Of Code</Link>
        </li>
        <li>
          <Link to="/carematrictarget">Care Matric Target</Link>
        </li> */}
        <li>
          <Link to="/rpms">RPM</Link>
        </li>
        <li>
          <Link to="/careregisterdevice">Care Register Device</Link>
        </li>
        <li>
          <Link to="/complience">compli</Link>
        </li>
        <li>
          <Link to="/dev">Timer</Link>
        </li>
        {/* <li>
          <Link to="/leads/1">Lead</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
