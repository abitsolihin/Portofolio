import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Web from './Pages/Web';
import Design from './Pages/Design';
import UIUX from './Pages/UIUX';
import Nav from './Components/Nav';
import BottomNav from './Components/BottomNav';
import { useMediaQuery } from '@material-ui/core';

function App() {
  const small = useMediaQuery('(min-width:500px)');
  return (
    <>
      <div className="app">
        <div className="brand">
          Bitz<span>Folio</span>
        </div>

        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />}>
            <Route index element={<Web />} />
            <Route path="design" element={<Design />} />
            <Route path="uiux" element={<UIUX />} />
          </Route>
        </Routes>
      </div>
      <div className="navigation-container">{small ? <Nav /> : <BottomNav />}</div>
    </>
  );
}

export default App;
