import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // State to check if page is fully loaded
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Effect to set the state once the page is fully loaded
  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);
    window.addEventListener("load", handleLoad);
    
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Durgesh Tiwari</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ fontSize: "21px" }}
          >
            a dedicated web developer passionate about crafting{" "}
            <br className="sm:block hidden" />
            innovative web applications.
          </p>
        </div>
      </div>

      {/* Only render ComputersCanvas when the page has fully loaded */}
      {isPageLoaded && <ComputersCanvas />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
