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

function App() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'rgb(236, 240, 36)' : '#202020',
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

      <nav className="nav">
        <NavLink style={navLinkStyle} to="/">
          {({ isActive }) => (isActive ? <AiFillHome size={25} /> : <AiOutlineHome size={25} />)}
        </NavLink>
        <NavLink style={navLinkStyle} to="/About">
          <SiAboutdotme size={25} />
        </NavLink>
        <NavLink style={navLinkStyle} to="/Projects">
          {({ isActive }) => (isActive ? <AiFillProject size={25} /> : <AiOutlineProject size={25} />)}
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
