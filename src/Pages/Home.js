import React from 'react';
import '../Style/Home.css';
import Profile1 from '../images/Profile1.png';
import { Link } from 'react-router-dom';
import { SiAboutdotme } from 'react-icons/si';

const Home = () => {
  return (
    <section className="section">
      <div className="Hwrapper">
        <div className="box">
          <h1>
            I'm <span>Bitzz</span>
          </h1>
          <h3>
            I'm a <span>Web Developer</span>
          </h3>
          <p>Hi, welcome to my personal portfolio website, here you can find out about me and the projects I have made.</p>
          <button className="aButton">
            <Link className="tButton" to="/About">
              <SiAboutdotme color="#000" size={25} />
            </Link>
          </button>
        </div>
        <div className="box">
          <img className="fprofile" src={Profile1} alt="foto profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
