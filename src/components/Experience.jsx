"use client";

import Heading from "@/components/sub/Heading";
import Image from "next/image";
import {experienceData} from "@/assets";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";
import {motion, useScroll, useSpring} from "framer-motion";
import {useRef} from "react";

const Experience = () => {
    const date = new Date().getFullYear();
    const containerRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: containerRef, offset: ["start 95%", "end end"]
    });

    const scrollY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20
    })

    return (
        <div className={"py-20 px-96 relative"}>
            <Heading text={"Experience & Education"}/>
            <Image src={"/experiences.png"} alt={"ExperiencesImage"} width={400} height={400}
                   className={"absolute -top-4 right-96 opacity-70 lg:hidden"}/>
            <div ref={containerRef}
                 className={"w-full h-full rounded-xl flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"}>
                {
                    experienceData.map((item, i) => {
                        return (
                            <div key={`id${i}`}
                                 className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${i % 2 === 0 ? "-left-[300px] xl:-left-[240px] lg:-left-0" : "left-[300px] xl:left-[240px] lg:left-0"}`}>
                                <motion.div initial={{opacity: 0, x: i % 2 === 0 ? -80 : 80}}
                                            whileInView={{opacity: 1, x: 0}}
                                            viewport={{once: true}}
                                            transition={{duration: .7, type: "spring", stiffness: 50}}
                                            className={"relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"}>
                                    <h1 className={"text-xl sm:text-lg font-light text-gray-700 "}>{item.title}</h1>
                                    <p className={"text-gray-800"}>
                                        <span className={"block font-light"}>Education:</span>
                                        <span className={"block pl-2 font-extralight"}>{
                                            item.education
                                        }</span>
                                    </p>
                                    <div className={"text-gray-800"}>
                                        <span className={"font-light"}>Experiences:</span>
                                        <ul className={"pl-2"}>
                                            {
                                                item.experience.map((it, index) => {
                                                    return (
                                                        <li key={index} className={"my-1 font-extralight"}>{it}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <span
                                        className={`absolute top-20 text-red-300 -translate-y-1/2 ${i % 2 === 0 ? "left-full rotate-180" : "right-full"}`}>
                                        <ArrowLeftSFillIcon/>
                                    </span>
                                </motion.div>
                                <div
                                    className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light 
                                    -translate-y-1/2 ${i % 2 === 0 ? "left-full -translate-x-1/2 lg:left-1/2" : "right-full translate-x-1/2 lg:right-1/2"} z-10 bg-white`}>
                                    {date - experienceData.length + i + 1}
                                </div>
                            </div>
                        )
                    })
                }

                <motion.div initial={{scaleY: 0}} style={{scaleY: scrollY}}
                            className={"absolute w-1 h-full rounded-full bg-gray-300 origin-top"}>

                </motion.div>
            </div>
        </div>
    );
};

export default Experience;