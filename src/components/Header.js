import Logoicon from "../../images/valoIcon.png";
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
    <li>Home</li>
    <li>Weapons</li>
    <li>Maps</li>
    <li>About</li>
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
