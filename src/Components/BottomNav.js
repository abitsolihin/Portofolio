import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { AiFillProject } from 'react-icons/ai';
import '../Style/BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav">
        <div className="button-wrapper">
          <NavLink to="/">
            <AiFillHome size={25} color="rgb(236, 240, 36)" />
          </NavLink>
        </div>
        <div className="button-wrapper">
          <NavLink to="/About">
            <SiAboutdotme size={25} color="rgb(236, 240, 36)" />
          </NavLink>
        </div>
        <div className="button-wrapper">
          <NavLink to="/Projects">
            <AiFillProject size={25} color="rgb(236, 240, 36)" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
