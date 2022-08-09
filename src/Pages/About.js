import React from 'react';
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
import { useSpring, animated } from '@react-spring/web';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from '@material-ui/core';

const About = () => {
  Aos.init();
  const small = useMediaQuery('(min-width: 48em)');
  const fadeIn = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '500' },
  });
  const fadeRight = useSpring({
    loop: { reverse: true },
    from: { transform: small ? 'translateY(-90px) translateX(-200px)' : 'translateY(-100px) translateX(-120px)', opacity: '1' },
    to: { transform: small ? 'translateY(-70px) translateX(-170px)' : 'translateY(-70px) translateX(-100px)', opacity: '1' },
    config: { duration: '2000' },
  });
  const fadeLeft = useSpring({
    loop: { reverse: true },
    from: { transform: small ? 'translateY(90px) translateX(200px)' : 'translateY(100px) translateX(120px)', opacity: '1' },
    to: { transform: small ? 'translateY(70px) translateX(170px)' : 'translateY(70px) translateX(100px)', opacity: '1' },
    config: { duration: '2000' },
  });

  return (
    <>
      <section className="aSection">
        <div className="aContainer">
          <div className="aBox">
            <h1 data-aos="fade-right">
              I'm <span>Bitzz</span>
            </h1>
            <h3 data-aos="fade-right" data-aos-delay="50">
              I'm a <span>Web Developer</span>
            </h3>
            <p data-aos="fade-right" data-aos-delay="100">
              Hi, my name is Abit Solihin, I am a web developer and graphic designer.
            </p>
            <div data-aos="fade-right" data-aos-delay="150" data-aos-offset="10" className="aIcon">
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
            <button data-aos="fade-right" data-aos-delay="200" data-aos-offset="10" className="aButton">
              <Link to="/About">Download CV</Link>
            </button>
          </div>
          <div className="aBox">
            <animated.img style={fadeIn} src={Profile2} className="fprofile" alt="foto profile" />
            <animated.div style={fadeRight} className="floating__wrapper">
              <h1>Web Developer</h1>
              <p>1+ Years Experience</p>
            </animated.div>
            <animated.div style={fadeLeft} className="floating__wrapper">
              <h1>Design Graphics</h1>
              <p>2+ Years Experience</p>
            </animated.div>
          </div>
        </div>
      </section>
      <section className="tools_section">
        <div className="tContainer">
          <div data-aos="fade-in" data-aos-delay="350" className="tTitle">
            <h1>Languages & Tools</h1>
            <p>Languages and tools that i used</p>
          </div>
          <div className="tBox">
            <div data-aos="fade-down" data-aos-delay="50" data-aos-offset="10" className="iTool">
              <AiOutlineHtml5 color="#202020" />
              <h4>HTML</h4>
            </div>
            <div data-aos="fade-down" data-aos-delay="100" data-aos-offset="10" className="iTool">
              <IoLogoCss3 color="#202020" />
              <h4>CSS</h4>
            </div>
            <div data-aos="fade-down" data-aos-delay="150" data-aos-offset="10" className="iTool">
              <IoLogoJavascript color="#202020" />
              <h4>JAVASCRIPT</h4>
            </div>
            <div data-aos="fade-down" data-aos-delay="200" data-aos-offset="10" className="iTool">
              <Gi3DMeeple color="#202020" />
              <h4>3D Modelling</h4>
            </div>
          </div>
          <div className="tBox">
            <div data-aos="fade-down" data-aos-delay="250" data-aos-offset="10" className="iTool">
              <FaReact color="#202020" />
              <h4>REACT</h4>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" data-aos-offset="10" className="iTool">
              <SiStyledcomponents color="#202020" />
              <h4>STYLED-COMPONENT</h4>
            </div>
            <div data-aos="fade-down" data-aos-delay="350" data-aos-offset="10" className="iTool">
              <MdDesignServices color="#202020" />
              <h4>Design Graphic</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="services_section">
        <div data-aos="fade-in" data-aos-delay="200" className="services_title">
          <h1>My Services</h1>
          <p>What I Offer</p>
        </div>
        <div className="services_container">
          <div data-aos="fade-right" data-aos-delay="50" id="services-wrapper" className="services-Wrapper">
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
          <div data-aos="fade-right" data-aos-delay="150" className="services-Wrapper">
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
          <div data-aos="fade-right" data-aos-delay="100" className="services-Wrapper">
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
          <div data-aos="fade-right" data-aos-delay="200" id="iContainer" className="services-Wrapper">
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
          <div data-aos="fade-in" data-aos-delay="150" className="sTitle">
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
