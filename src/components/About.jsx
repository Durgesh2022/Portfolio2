import { motion } from "framer-motion";
import React from "react";


import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    className='service-card-container'
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  >
    <div className='service-card'>
      <img src={icon} alt='web-development' className='service-icon' />
      <h3 className='service-title'>{title}</h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
     
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
     
      <div>
    
    </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");