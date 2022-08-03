import React, { useState } from 'react';
import './../Style/About.css';
import { FaLaptopCode } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineAntDesign, AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaPenNib, FaCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { Gi3DMeeple } from 'react-icons/gi';
import { SiStyledcomponents } from 'react-icons/si';
import Accordion from '../Components/Accordion';
import Profile2 from '../images/Profile2.png';

const About = () => {
  const [diKlik, setDiklik] = useState(false);

  const animate = () => {
    setDiklik(true);
    setTimeout(() => setDiklik(false), 200);
  };

  return (
    <>
      <section className="aSection">
        <div className="aContainer">
          <div className="aBox">
            <h1>
              I'm <span>Bitzz</span>
            </h1>
            <h3>
              I'm a <span>Web Developer</span>
            </h3>
            <p>Hi, my name is Abit Solihin, I am a web developer and graphic designer.</p>
            <div className="aIcon">
              <a href="https://www.instagram.com">
                <BsInstagram size={17} />
              </a>
              <a href="https://www.linkedin.com">
                <AiOutlineLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com">
                <AiOutlineFacebook size={20} />
              </a>
              <a href="https://www.github.com">
                <AiOutlineGithub size={20} />
              </a>
            </div>
            <button onClick={animate} className={diKlik ? 'diKlik' : 'aButton'}>
              <Link to="/About">Download CV</Link>
            </button>
          </div>
          <div className="aBox">
            <img src={Profile2} className="fprofile" alt="foto profile" />
          </div>
        </div>

        <div className="tContainer">
          <div className="tTitle">
            <h1>Languages & Tools</h1>
            <p>Languages and tools that i used</p>
          </div>
          <div className="tBox">
            <div className="iTool">
              <AiOutlineHtml5 color="#202020" />
              <h4>HTML</h4>
            </div>
            <div className="iTool">
              <IoLogoCss3 color="#202020" />
              <h4>CSS</h4>
            </div>
            <div className="iTool">
              <IoLogoJavascript color="#202020" />
              <h4>JAVASCRIPT</h4>
            </div>
            <div className="iTool">
              <Gi3DMeeple color="#202020" />
              <h4>3D Modelling</h4>
            </div>
          </div>
          <div className="tBox">
            <div className="iTool">
              <FaReact color="#202020" />
              <h4>REACT</h4>
            </div>
            <div className="iTool">
              <SiStyledcomponents color="#202020" />
              <h4>STYLED-COMPONENT</h4>
            </div>
            <div className="iTool">
              <MdDesignServices color="#202020" />
              <h4>Design Graphic</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="services_section">
        <div className="services_title">
          <h1>My Services</h1>
          <p>What I Offer</p>
        </div>
        <div className="services_container">
          <div id="services-wrapper" className="services-Wrapper">
            <div className="icon-wrapper">
              <div className="icon">
                <AiOutlineAntDesign color="rgb(236, 240, 36)" size={50} />
              </div>
            </div>
            <div className="title-wrapper">
              <h2>Design Graphic</h2>
              <p> I'll Design</p>
            </div>
          </div>
          <div className="services-Wrapper">
            <div className="icon-wrapper">
              <div className="icon">
                <AiOutlineHtml5 color="rgb(236, 240, 36)" size={50} />
              </div>
            </div>
            <div className="title-wrapper">
              <h2>Web Developer</h2>
              <p> I'll Develop your own website</p>
            </div>
          </div>
        </div>
        <div className="services_container">
          <div className="services-Wrapper">
            <div className="icon-wrapper">
              <div className="icon">
                <Gi3DMeeple color="rgb(236, 240, 36)" size={50} />
              </div>
            </div>
            <div className="title-wrapper">
              <h2>3D Modelling</h2>
              <p> I'll Create 3D Object</p>
            </div>
          </div>
          <div id="iContainer" className="services-Wrapper">
            <div className="icon-wrapper">
              <div id="mouse1" className="icon">
                <MdDesignServices color="rgb(236, 240, 36)" size={50} />
              </div>
            </div>
            <div className="title-wrapper">
              <h2>UI/UX Design</h2>
              <p> I'll Design your Website</p>
            </div>
          </div>
        </div>

        <div className="sContainer">
          <div className="sTitle">
            <h1>Skills</h1>
            <p> My Technical Level</p>
          </div>
          <Accordion
            icon={<FaLaptopCode size={25} />}
            title="Frontend Developer"
            text={
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>STYLED-COMPONENTS</li>
              </ul>
            }
          />
          <Accordion
            icon={<FaCode size={25} />}
            title="Backend developer"
            text={
              <ul>
                <li>NODE JS</li>
              </ul>
            }
          />
          <Accordion
            icon={<FaPenNib size={25} />}
            title="Design Graphics"
            text={
              <ul>
                <li>ADOBE PHOTOSHOP</li>
                <li>BLENDER 3D</li>
                <li>FIGMA</li>
              </ul>
            }
          />
        </div>
      </section>
    </>
  );
};

export default About;
