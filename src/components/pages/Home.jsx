import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import poto2 from "../../assets/mee2.jpg"

const Home = () => {
  const bgColor = "#65A3CB";

  return (
    <div
      className="h-screen flex flex-row justify-center items-center "
      style={{ backgroundColor: bgColor }}
    >
      <div className="mr-10 flex flex-col items-center justify-center h-screen mr-64 m-64">
      <div className="h-96 w-80 flex flex-col justify-center items-center">
        <img
          src={poto2}
          alt=""
          className="rounded-full h-96 w-full object-cover shadow-lg mb-8"
        />
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/y%C3%BC%C5%9Fa-mervan-g%C3%BClg%C3%B6r-9685a323b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077B5" }}
          >
            <FaLinkedinIn size={32} />
          </a>
          <a
            href="https://github.com/yusagulgor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000000" }}
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/yusa_gulgor/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ED4956" }}
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://discord.gg/nDfkRr8c"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " #5865F2" }}
          >
            <FaDiscord size={32} />
          </a>
        </div>
      </div>
    </div>
      <div className="mr-10 w-1/3 flex flex-col justify-center items-center p-8">
        <p  className="text-4xl font-bold">Hello, my name is</p>
        <p style={{color:'#EBB248'}} className="text-5xl font-bold mt-2">Yüşa Mervan</p>
        <br />
        <span style={{color:'#29CCA7'}} className='text-2xl font-bold'>
          Software Developer.
          </span>
      </div>
    </div>
  );
};

export default Home;
