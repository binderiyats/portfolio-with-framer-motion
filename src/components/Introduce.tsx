import { FC } from "react";
import Link from "next/link";

import { AiOutlineHome, AiOutlineArrowDown } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import roundText from "@/assets/round-text.png";
import Image from "next/image";

const Introduce: FC = () => (
  <div className="container text-white">
    <div className="flex items-center justify-between mb-[50px]">
      <div className="flex items-center gap-3 justify-center text-xs-slim uppercase border border-color-3 rounded-[30px] px-5 py-[9px]">
        <AiOutlineHome size={14} />
        introduce
      </div>
      <button className="grid place-items-center border border-color-3 w-[55px] h-[55px] rounded-full hover:border hover:border-color-1 hover:text-color-1 duration-300">
        <HiOutlineMenuAlt4 size={25} />
      </button>
    </div>
    <h1 className="text-introduce mb-[43px]">
      Say Hi from <span className="text-color-1">Binderiya</span>, Framer
      Designer and Developer
    </h1>
    <p className="text-text text-color-2 mb-[31px]">
      I design and code beautifully simple things and i love what i do. Just
      simple like that!
    </p>
    <Link
      href={"/"}
      className="grid place-items-center w-[173px] h-[173px] rounded-full border border-color-3 ml-[580px] overflow-hidden"
    >
      <div className="circle w-full p-3">
        <Image
          src={roundText}
          alt="Rounde"
          className="w-full h-full aspect-square object-contain"
        />
      </div>
      <AiOutlineArrowDown size={40} className="absolute" />
    </Link>
    <div className="mt-[55px] flex">
      <div>
        <h1 className="text-introduce text-color-1 mb-[38px]">10+</h1>
        <span className="uppercase text-bg-1">years of experience</span>
      </div>
      <div>
        <h1 className="text-introduce text-color-1 mb-[38px]">10+</h1>
        <span className="uppercase text-bg-1">years of experience</span>
      </div>
    </div>
  </div>
);

export default Introduce;
