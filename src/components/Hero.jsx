"use client";
import Image from "next/image";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import {useMotionValue, useTransform, motion, useSpring} from "framer-motion";
import {useState} from "react";

const heroIcons = [
    <InstagramLineIcon/>,
    <FacebookCircleLineIcon/>,
    <YoutubeLineIcon/>,
    <GithubLineIcon/>
];
const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({innerWidth: 0, innerHeight: 0});
    const [mouseMove, setMouseMove] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        x.set(clientX);
        y.set(clientY);
    }

    const handleMouseEnter = () => {
        setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight});
        setMouseMove(true);
    }

    const {innerWidth, innerHeight} = windowOffset

    const xSpring = useSpring(x, {stiffness: 100, damping: 10});
    const ySpring = useSpring(y, {stiffness: 100, damping: 10});

    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);


    return (
        <div className={"h-screen grid place-items-center"} onMouseMove={handleMouseMove}
             onMouseEnter={handleMouseEnter}>
            <div>
                <div className={"flex flex-col items-center justify-center gap-y-3 font-light capitalize"}>
                    <motion.div className={'flex items-center justify-center'}
                                style={{
                                    rotateY: mouseMove ? rotateY : 0,
                                    rotateX: mouseMove ? rotateX : 0,
                                    transition: "0.1s"
                                }}>
                        <Image
                            src={'/me.jpg'}
                            alt={"Person Image"}
                            width={400}
                            height={400}
                            priority={true}
                            className={"h-auto w-[300px] rounded-3xl"}
                        />
                        <motion.span
                            initial={{scale: 0}}
                            animate={{
                                opacity: buttonHover ? 0 : 1,
                                scale: buttonHover ? 2 : 0,
                                y: buttonHover ? -40 : 0
                            }}
                            transition={{
                                opacity: {delay: 0.4}
                            }}
                            className={"absolute text-3xl font-semibold text-white"}>Hi
                        </motion.span>
                    </motion.div>
                    <h1 className={"text-center text-3xl font-bold tracking-wider text-gray-600 sm:text-2xl"}>
                        My Name is MohammadHossein,
                    </h1>
                    <p className={"text-lg tracking-wider text-gray-800"}>I Like Develop ❤</p>
                </div>
                <div className={"flex flex-row mt-8 justify-center gap-x-8 text-3xl text-orange-500 sm:text-2xl"}>
                    {
                        heroIcons.map((icon, index) => (
                            <a className={"rounded-lg hover:text-red-300 transition-colors"}
                               key={index} href={"#"}>{icon}</a>
                        ))
                    }

                </div>
                <a href="#"
                   onMouseEnter={() => setButtonHover(true)}
                   onMouseLeave={() => setButtonHover(false)}
                   className={"mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"}>
                    Talk to me!
                </a>
            </div>
        </div>
    );
};

export default Hero;