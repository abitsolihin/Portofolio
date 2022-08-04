import React from 'react';
import '../Style/Home.css';
import Profile1 from '../images/Profile1.png';
import { Link } from 'react-router-dom';
import { SiAboutdotme } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  Aos.init();
  return (
    <section className="section">
      <div className="Hwrapper">
        <div className="box">
          <h1 data-aos="fade-right" data-aos-delay="50">
            I'm <span>Bitzz</span>
          </h1>
          <h3 data-aos="fade-right" data-aos-delay="100">
            I'm a <span>Web Developer</span>
          </h3>
          <p data-aos="fade-right" data-aos-delay="150">
            Hi, welcome to my personal portfolio website, here you can find out about me and the projects I have made.
          </p>
          <button data-aos="fade-right" data-aos-delay="200" className="aButton">
            <Link className="tButton" to="/About">
              <SiAboutdotme color="#000" size={25} />
            </Link>
          </button>
        </div>
        <div className="box">
          <img data-aos="fade-left" data-aos-delay="200" className="fprofile" src={Profile1} alt="foto profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
