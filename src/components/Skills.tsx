import { FC } from "react";
import Image from "next/image";
import react from "../assets/react.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiMongodb,
} from "react-icons/si";
import { IoBarbellOutline, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import Reveal from "./utils/Reveal";

const Skills: FC = () => (
  <div className="container w-[672px]">
    <Reveal>
      <div className="flex items-center gap-2 justify-center w-fit text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px] mb-[53px]">
        <IoBarbellOutline size={14} />
        my skills
      </div>
    </Reveal>
    <Reveal>
      <h1 className="text-title mb-[33px]">
        My <span className="text-color-1">Advantages</span>
      </h1>
    </Reveal>

    <div className="grid grid-cols-4 gap-[24px]">
      <Reveal direction="Right">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <FaReact
              size={70}
              className=" group-hover:text-color-1 duration-300 h-[70]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            React
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiTailwindcss
              size={70}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            TailwindCSS
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Down">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiBootstrap
              size={70}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            Bootstrap
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Left">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiJavascript
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            JavaScript
          </h1>
        </div>
      </Reveal>
      <Reveal direction="Right">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiTypescript
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            JavaScript
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <TbBrandNextjs
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            NextJS
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Down">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <FaNodeJs
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            NodeJS
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Left">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiExpress
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            Express
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Right">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiNestjs
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            NestJS
          </h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <GrMysql
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            MySQL
          </h1>
        </div>
      </Reveal>

      <Reveal direction="Down">
        <div className="flex flex-col items-center justify-between px-[44px] py-[40px] rounded-[85px] border border-color-3 group hover:border hover:border-color-1 duration-300">
          <div className="mb-[20px]">
            <SiMongodb
              size={55}
              className=" group-hover:text-color-1 duration-300  h-[70px]"
            />
          </div>

          <h1 className="group-hover:text-color-1 duration-300 text-center">
            MongoDB
          </h1>
        </div>
      </Reveal>
    </div>
  </div>
);

export default Skills;
