import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import "./styles/SocialMedia.    css";

import {IIITSlogo} from '../assets'

const Education = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Education</p> */}
        <h2 className={styles.sectionHeadText}>Education </h2>
      </motion.div>

      <div className="container flex mt-4 flex-wrap">
        <div className="logo" style={{alignItems:'center'}}>
            <img src={IIITSlogo } alt="" srcset="" style={{height:'100px', width:'120px', borderRadius:'50%'}} />
        </div>
        <div className="info mx-12 flex flex-col ">
            <div className="name" style={{fontSize:'1.5rem'}}>
                <span>Indian Institute of Information Technology, Sri City(IIITS)</span>
            </div>
            <div className="branch" style={{fontSize:'1.25rem'}}>
                BTech in Computer Science and Engineering (CSE)
            </div>
            <div className="year" style={{fontSize:'1rem'}}>
                November 2021 - May 2025
            </div>
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Education, "education");
