import React, {Suspense, useState} from 'react'
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import {CanvasLoader} from "./canvas";
import {DemoComputer} from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {

        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    return (
        <section className="c-space my-20 " id="Project">
             <motion.div >
        <p className={`${styles.sectionSubText} text-center`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
        <p className={`${styles.sectionSubText} text-center w-[1200px] mx-auto`}>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>
            <div>
            <div className="flex lg:flex-row flex-col mt-12 gap-x-5 w-full lg:h-[600px]">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl  rounded-lg lg:w-1/2 w-full lg:h-full border border-black-300 ">

                    <a
  href={currentProject.spotlight}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-5 right-5"
>
  <div>
    <img
      src="/assets/github.png"
      alt="spotlight"
      className="w-10 h-10 object-cover rounded-xl"
    />
  </div>
</a>
                    <div className="p-0 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-20 h-full object-contain shadow-sm "/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-3xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">{currentProject.tags.map((tag, index) => (
                            <div key={index} className="text-logo">
                                <img src={tag.path} alt={tag.name} className='w-20'/>
                            </div>
                        ))}
                        </div>

                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href}
                           target="_blank" rel="noreferrer">
                            <p>Check live site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation("previous")}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>

                        </button>
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation("next")}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>

                        </button>
                    </div>
                </div>
                <div className="flex flex-col border border-black-300  rounded-lg lg:w-1/2 w-full lg:h-full h-96">
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10, 10, 5]}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Canvas>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Projects