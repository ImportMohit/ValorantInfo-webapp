import Logoicon from "../../images/valoIcon.png";
import { Link } from "react-router-dom";

/********Header**********/
//state

//logo
const valorantlogo = (
  <a href="/">
    <img src={Logoicon} alt="Valorant" className="valoranticon" />
  </a>
);

//listItems

const navItems = (
  <ul className="nav-items">
    <li><Link to="/" className="text-link">Home</Link></li>
    <li><Link to="/agents" className="text-link">Agents</Link></li>
    <li><Link to="/weapons" className="text-link">Weapons</Link></li>
    <li><Link to="/maps" className="text-link">Maps</Link></li>
    <li><Link to="/mystats" className="text-link">My-Stats</Link></li>
  </ul>
);
//final Header
const Header = () => {
  return (
    <div className="header">
      {valorantlogo}
      {navItems}
    </div>
  );
};

export default Header;
