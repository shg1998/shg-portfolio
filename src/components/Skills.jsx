"use client";

import Heading from "@/components/sub/Heading";
import Image from "next/image";

const Skills = () => {
    return (
        <div className={'min-h-screen flex flex-col items-center justify-center gap-y-20 px-96'}>
            <Heading text={"Skills"}/>
            <div className={"w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6"}>
                <div
                    className={"flex items-center justify-center gap-x-3 rounded-xl border border-yellow-400 bg-zinc-200 px-5 py-2 lg:px-2"}>
                    <Image src={"/skill.png"} alt={"SkillsImage"} width={100} height={100} className={"h-auto w-[40px]"}/>
                    <p className={"text-sm text-gray-600"}>NextJs</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;