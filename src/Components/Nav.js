import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineProject } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { BiHide } from 'react-icons/bi';
import '../Style/Nav.css';

const Nav = () => {
  const [hide, setHide] = useState(false);

  let toggleHandler = (e) => {
    setHide(!hide);
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      padding: ' 0.4rem',
      backgroundColor: isActive ? 'rgb(236, 240, 36)' : '#fff',
      borderRadius: isActive ? '50%' : '0',
    };
  };
  return (
    <nav className="nav">
      <div onClick={toggleHandler} className="hide-button">
        <BiHide size={25} color="#202020" />
      </div>
      <div className="navWrapper">
        <NavLink style={navLinkStyle} to="/">
          {({ isActive }) => (isActive ? <AiFillHome color="#202020" size={25} /> : <AiOutlineHome color="#202020" size={25} />)}
        </NavLink>
        <NavLink style={navLinkStyle} to="/About">
          <SiAboutdotme color="#202020" size={25} />
        </NavLink>
        <NavLink style={navLinkStyle} to="/Projects/">
          {({ isActive }) => (isActive ? <AiFillProject color="#202020" size={25} /> : <AiOutlineProject color="#202020" size={25} />)}
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
