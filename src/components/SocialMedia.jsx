import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import "./styles/SocialMedia.    css";

const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-around" style={{ width: "30%" }}>
        <div className="icon">
          <a href="https://github.com/Omkar-Khairnar" target="_blank">
          <i
            className="fa-brands fa-github fa-xl"
            style={{ color: "white", height: "10%" }}
          ></i>
          </a>
        </div>
        <div className="icon">
          <a href="www.linkedin.com/in/omkar-khairnar-4a5789248" target="_blank">
            <i class="fa-brands fa-linkedin fa-xl" style={{ color: "white", height:'20px' }}></i>
          </a>
        </div>
        <div className="icon">
          <a href="mailto:omkarkhairnar9441@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope fa-xl" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://leetcode.com/Omkar_K" target="_blank">
            <i class="fa-solid fa-code fa-xl" style={{ color: "white" }}></i>
          </a>
        </div>
      </div>

      <div className="container flex mt-4 ml-4">
        <div className="btn mx-2">
            <a href="#contact">
            <button className="btn btn-primary bg-white text-black p-1 w-55 rounded-md" style={{height:'3.5rem', fontWeight:'bolder', fontSize:'17px'}}>Contact Me</button>
            </a>
        </div>
        <div className="btn mx-2">
            <a href="https://drive.google.com/file/d/1_4PDoODJeDD-BO8RQcaWfPu6gdimSPOw/view?usp=sharing" target="_blank">
            <button className="btn btn-primary bg-white text-black p-1 w-55 rounded-md" style={{height:'3.5rem', fontWeight:'bolder', fontSize:'17px'}}>Resume</button>
            </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(SocialMedia, "socialmedia");
