import React from 'react';
import '../Style/Projects.css';
import { NavLink, Outlet } from 'react-router-dom';

const Projects = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      transition: isActive ? ' 0.2s ease' : ' 0.2s ease',
      borderBottom: isActive ? ' 3px solid rgb(236, 240, 36)' : 'none',
      color: isActive ? 'rgb(236, 240, 36)' : '#fff',
    };
  };
  return (
    <div className="Projects">
      <nav className="nav-container">
        <NavLink style={navLinkStyle} to="/Projects/">
          Web
        </NavLink>
        <NavLink style={navLinkStyle} to="/Projects/Design">
          Design Graphic
        </NavLink>
        <NavLink style={navLinkStyle} to="/Projects/UIUX">
          UI/UX
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Projects;
