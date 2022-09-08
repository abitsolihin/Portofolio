import React, { useEffect, useState } from 'react';
import '../Style/ProjectPages.css';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WebsitePages = () => {
  Aos.init();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get('https://projects-api121.herokuapp.com/projects')
      .then((result) => {
        setLoading(false);
        setProjects(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Wait A Second</h1>
        </div>
      ) : (
        <div className="content-container">
          {projects.map((result, id) => {
            return (
              <div data-aos="fade-down" data-aos-delay="50" className="content-wrapper" key={id}>
                <div data-aos="fade-down" data-aos-delay="100" className="content-title">
                  <h2>{result.name}</h2>
                </div>
                <div data-aos="fade-down" data-aos-delay="150" className="content-description">
                  <p>{result.description}</p>
                </div>
                <div className="content-links">
                  <a data-aos="fade-down" data-aos-delay="200" href={result.linkweb}>
                    <AiOutlineLink color="rgb(236, 240, 36)" size={20} />
                  </a>
                  <a data-aos="fade-down" data-aos-delay="250" href={result.linkgithub}>
                    <AiOutlineGithub color="rgb(236, 240, 36)" size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default WebsitePages;
