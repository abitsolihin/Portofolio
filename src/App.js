import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Web from './Pages/Web';
import Design from './Pages/Design';
import UIUX from './Pages/UIUX';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineProject } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { BiHide } from 'react-icons/bi';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const [hide, setHide] = useState(false);

  let toggleHandler = (e) => {
    setHide(!hide);
  };

  const hideAnimation = useSpring({
    from: { transform: 'translateY(85vh) translateX(0)' },
    to: { transform: hide ? 'translateY(85vh) translateX(110vh)' : 'translateY(85vh) translateX(0)' },
  });

  const navLinkStyle = ({ isActive }) => {
    return {
      padding: ' 0.4rem',
      backgroundColor: isActive ? 'rgb(236, 240, 36)' : '#fff',
      borderRadius: isActive ? '50%' : '0',
    };
  };

  return (
    <div className="app">
      <div className="brand">
        Bitz<span>Folio</span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />}>
          <Route path="/Projects/" element={<Web />} />
          <Route path="Design" element={<Design />} />
          <Route path="UIUX" element={<UIUX />} />
        </Route>
      </Routes>

      <animated.nav style={hideAnimation} className="nav">
        <div onClick={toggleHandler} className="hide-button">
          <BiHide size={25} color="#202020" />
        </div>
        <div className="navWrapper">
          <NavLink style={navLinkStyle} to="/">
            {({ isActive }) => (isActive ? <AiFillHome size={25} /> : <AiOutlineHome size={25} />)}
          </NavLink>
          <NavLink style={navLinkStyle} to="/About">
            <SiAboutdotme size={25} />
          </NavLink>
          <NavLink style={navLinkStyle} to="/Projects">
            {({ isActive }) => (isActive ? <AiFillProject size={25} /> : <AiOutlineProject size={25} />)}
          </NavLink>
        </div>
      </animated.nav>
    </div>
  );
}

export default App;
