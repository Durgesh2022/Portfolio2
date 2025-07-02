import {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

import {Developer} from "./canvas";
import Loader from "./canvas/Loading.jsx";
import {workExperiences} from '../constants/index.js';
import { styles } from "../styles";
import { motion } from "framer-motion";


const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <motion.div >
                  <p className={`${styles.sectionSubText} text-center`}>My Journey</p>
<h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
 <p className={`${styles.sectionSubText} text-center w-[1200px] mx-auto`}>
  The following experiences highlight my professional growth and the roles I've undertaken in various organizations. They reflect my ability to collaborate in teams, adapt to new challenges, and contribute effectively to real-world projects.
</p>
                </motion.div>
                <div className="flex lg:flex-row flex-col mt-12 gap-x-5 w-full lg:h-[600px]">
                    <div className="lg:w-[30%] col-span-1 rounded-lg  border border-black-300 height-full w-full">
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>

                            <Suspense fallback={<Loader/>}>
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="lg:w-[70%] col-span-2 rounded-lg border border-black-300 overflow-y-auto max-h-[600px]">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="flex items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group">
                                    <div className="flex flex-col justify-start items-center py-2 min-h-[150px]">
 <div className="rounded-3xl w-16 h-16 flex items-center justify-center text-3xl bg-black-600">
  <span>{item.icon}</span>
</div>
  <div className="flex-1 w-1 mt-4 bg-white group-hover:bg-black-500 group-last:hidden" />
</div>


                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
