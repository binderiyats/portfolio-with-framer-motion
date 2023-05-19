import { FC } from "react";

import { AiFillShopping } from "react-icons/ai";
import { HiCodeBracket } from "react-icons/hi2";
import Reveal from "./utils/Reveal";

const Service: FC = () => (
  <div className="container">
    <Reveal>
      <div className="flex items-center gap-3 justify-start w-fit text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px] mb-[53px]">
        <AiFillShopping size={14} />
        services
      </div>
    </Reveal>
    <Reveal>
      <h1 className="text-title mb-[33px]">
        My <span className="text-color-1">Specializations</span>
      </h1>
    </Reveal>
    <div className="flex flex-col gap-[10px]">
      <Reveal>
        <div className="rounded-[30px] border border-color-3 px-[48px] py-[43px] flex flex-col group hover:border hover:border-color-1 duration-300">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl-slim  mb-2">Portfolio Website</h2>
            <HiCodeBracket size={30} className="text-color-1" />
          </div>
          <p className="text-sm-regular2 mb-[30px]">
            I build website go live with Framer
          </p>
          <span className="group-hover:underline duration-300 text-[12px] font-[400] leading-[20px]">
            12 PROJECTS
          </span>
        </div>
      </Reveal>
      <Reveal>
        <div className="rounded-[30px] border border-color-3 px-[48px] py-[43px] flex flex-col group hover:border hover:border-color-1 duration-300">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl-slim  mb-2">Portfolio Website</h2>
            <HiCodeBracket size={30} className="text-color-1" />
          </div>
          <p className="text-sm-regular2 mb-[30px]">
            I build website go live with Framer
          </p>
          <span className="group-hover:underline duration-300 text-[12px] font-[400] leading-[20px]">
            12 PROJECTS
          </span>
        </div>
      </Reveal>
      <Reveal>
        <div className="rounded-[30px] border border-color-3 px-[48px] py-[43px] flex flex-col group hover:border hover:border-color-1 duration-300">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl-slim  mb-2">Portfolio Website</h2>
            <HiCodeBracket size={30} className="text-color-1" />
          </div>
          <p className="text-sm-regular2 mb-[30px]">
            I build website go live with Framer
          </p>
          <span className="group-hover:underline duration-300 text-[12px] font-[400] leading-[20px]">
            12 PROJECTS
          </span>
        </div>
      </Reveal>
    </div>
  </div>
);

export default Service;
