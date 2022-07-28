import React from 'react';
import '../Style/ProjectPages.css';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

const WebsitePages = () => {
  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="content-title">
          <h2>MoveZ Web Minting</h2>
        </div>
        <div className="content-description">
          <p>MoveZ Web Minting adalah sebuah Website Yang bertujuan untuk memperkenalkan sebuah project NFT dan melakukan Minting NFT didalamnya</p>
        </div>
        <div className="content-links">
          <a href="https://movez.pages.dev/">
            <AiOutlineLink color="rgb(236, 240, 36)" size={20} />
          </a>
          <a href="https://www.github.com/SolDuck/MoveZ">
            <AiOutlineGithub color="rgb(236, 240, 36)" size={20} />
          </a>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-title">
          <h2>Portofolio Class Website</h2>
        </div>
        <div className="content-description">
          <p>Website Ini Berisi Biodata mengenai Siswa yang ada di satu kelas dan gallery kelas.</p>
        </div>
        <div className="content-links">
          <a href="https://multimedia2.pages.dev/">
            <AiOutlineLink color="rgb(236, 240, 36)" size={20} />
          </a>
          <a href="https://github.com/SolDuck/multimedia2.github.io">
            <AiOutlineGithub color="rgb(236, 240, 36)" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebsitePages;
