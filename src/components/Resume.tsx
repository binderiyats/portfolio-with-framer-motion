import { FC } from "react";

import { MdOutlineWorkOutline } from "react-icons/md";
import Reveal from "./utils/Reveal";

const Resume: FC = () => (
  <div className="container">
    <Reveal>
      <div className="flex items-center gap-3 justify-start w-fit text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px] mb-[53px]">
        <MdOutlineWorkOutline size={14} />
        resume
      </div>
    </Reveal>
    <Reveal>
      <h1 className="text-title mb-[33px]">
        Education & <span className="text-color-1">Experience</span>
      </h1>
    </Reveal>
    <div>
      <Reveal direction="Left">
        <div className="pl-[74px] pb-[68px] flex flex-col justify-start border-l border-color-3 group relative">
          <span className="text-color-2 text-text mb-[28px] group-hover:text-color-1 duration-300">
            2023-Present
          </span>
          <ul>
            <li>
              <h2 className="mb-[5px] text-2xl-slim">Front-End Developer</h2>
              <span className="xxs-slim text-bg-1">Pinecone Studio</span>
            </li>
          </ul>
          <div className="absolute left-[-6.5px] w-[12px] h-[12px] rounded-full bg-color-2 group-hover:bg-color-1"></div>
        </div>
      </Reveal>
      <Reveal direction="Left">
        <div className="pl-[74px] pb-[68px] flex flex-col justify-start border-l border-color-3 group relative">
          <span className="text-color-2 text-text mb-[28px] group-hover:text-color-1 duration-300">
            2022-2023
          </span>
          <ul>
            <li>
              <h2 className="mb-[5px] text-2xl-slim">MERN Developer</h2>
              <span className="xxs-slim text-bg-1">Pinecone Academy</span>
            </li>
          </ul>
          <div className="absolute left-[-6.5px] w-[12px] h-[12px] rounded-full bg-color-2 group-hover:bg-color-1"></div>
        </div>
      </Reveal>
      <Reveal direction="Left">
        <div className="pl-[74px] pb-[68px] flex flex-col justify-start border-l border-color-3 group relative">
          <span className="text-color-2 text-text mb-[28px] group-hover:text-color-1 duration-300">
            2020-present
          </span>
          <ul>
            <li className="mb-[18px]">
              <h2 className="mb-[5px] text-2xl-slim">
                Bachelor Degree of Embedded System
              </h2>
              <span className="xxs-slim text-bg-1">
                Mongolian University of Science and Technology, SICT
              </span>
            </li>
          </ul>
          <div className="absolute left-[-6.5px] w-[12px] h-[12px] rounded-full bg-color-2 group-hover:bg-color-1"></div>
        </div>
      </Reveal>
      <Reveal direction="Left">
        <div className="pl-[74px] pb-[68px] flex flex-col justify-start border-l border-color-3 group relative">
          <span className="text-color-2 text-text mb-[28px] group-hover:text-color-1 duration-300">
            2017-2019
          </span>
          <ul>
            <li className="mb-[18px]">
              <h2 className="mb-[5px] text-2xl-slim">
                Bachelor Degree of Biology
              </h2>
              <span className="xxs-slim text-bg-1">
                National University of Mongolia
              </span>
            </li>
          </ul>
          <div className="absolute left-[-6.5px] w-[12px] h-[12px] rounded-full bg-color-2 group-hover:bg-color-1"></div>
        </div>
      </Reveal>
      <Reveal direction="Left">
        <div className="pl-[74px] flex flex-col justify-start border-l border-color-3 group relative">
          <span className="text-color-2 text-text mb-[28px] group-hover:text-color-1 duration-300">
            2016-2017
          </span>
          <ul>
            <li className="mb-[18px]">
              <h2 className="mb-[5px] text-2xl-slim">High School</h2>
              <span className="xxs-slim text-bg-1">
                Secondary School in Ulaanbaatar
              </span>
            </li>
          </ul>
          <div className="absolute left-[-6.5px] w-[12px] h-[12px] rounded-full bg-color-2 group-hover:bg-color-1"></div>
        </div>
      </Reveal>
    </div>
  </div>
);
export default Resume;
