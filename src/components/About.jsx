import { motion } from "framer-motion";
import React from "react";



import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";





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